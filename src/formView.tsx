import * as React from 'react';
import {FormEvent} from 'react';
import {computed} from 'mobx';
import {Rule} from './rule';
import {Field} from './field';
import {Face} from './face';
import {CreateControl, ButtonsControl} from './control';
import {RowContainer, CreateRow, bootstrapCreateRow, elementCreateRow} from './rowContainer';

export interface FieldView {
    field: Field;
    face?: Face;
}

export interface LabeledRow {
    label?: string;
    createRow?: CreateRow;
    createControl?: CreateControl;
    help?: JSX.Element;
}

export interface FieldRow extends LabeledRow, FieldView {
}

export interface GroupRow extends LabeledRow {
    group: FieldView[];
}

export type LabelFormRow = FieldRow|GroupRow|LabeledRow;
export type FormRow = LabelFormRow|JSX.Element;

export interface SubmitResult {
    success: boolean;
    message?: string
    result?: any;
}

export interface FormProps {
    formRows: FormRow[];
    rules?: Rule | Rule[];
    onSumit: (values:any) => Promise<SubmitResult|undefined>;
    submitButton?: string|JSX.Element;
    clearButton?: string|boolean;
    resetButton?: string|boolean;
    createRow?: CreateRow;
    createControl?: CreateControl;
}

export class FormView {
    private initValues:any;
    private rows: RowContainer[] = [];
    private buttonsRow: RowContainer;
    props: FormProps;
    createControl?: CreateControl;
    constructor(props:FormProps, initValues?:any) {
        this.props = props;
        this.initValues = initValues;
        this.buildRows(props);
        this.createControl = props.createControl;
        this.onSubmit = this.onSubmit.bind(this);
    }

    @computed get hasError():boolean {
        return this.rows.some(row => row.hasError);
    }
    @computed get nothing():boolean {
        let ret = this.rows.every(row => !row.filled);
        return ret;
    }

    readValues():any {
        let values = {} as any;
        for (let row of this.rows) {
            row.readValues(values);
        }
        return values;
    }

    clearErrors() {
    }

    setError(fieldName:string, error:string) {
        for (let row of this.rows) {
            row.setError(fieldName, error);
        }
    }

    setInitValues() {
        if (this.initValues === undefined) return;
        for (let row of this.rows) {
            row.setInitValues(this.initValues);
        }
    }

    private buildRows(props:FormProps) {
        let {formRows, createRow} = props;
        if (formRows === undefined) {
            console.log('TonvaForm need formRows defined');
            return;
        }
        for (let row of formRows) {
            this.rows.push(this.buildRow(row, createRow));
        }
        this.buttonsRow = this.buildRow({createControl:this.createButtons.bind(this)}, undefined);
    }

    private buildRow(formRow: FormRow, formRowCreator: CreateRow):RowContainer {
        let createRow:CreateRow;
        let type = (formRow as JSX.Element).type;
        if (type !== undefined) {
            createRow = elementCreateRow;
        }
        else {
            createRow = (formRow as (FieldRow | GroupRow | LabeledRow)).createRow;
            if (createRow === undefined) {
                createRow = formRowCreator;
                if (createRow === undefined) createRow = bootstrapCreateRow;
            }
        }
        let row = createRow(this, formRow);
        return row;
    }

    private createButtons(form:FormView, row: FormRow) {
        return new ButtonsControl(form);
    }

    render():JSX.Element {
        return <form onSubmit={this.onSubmit}>
            {this.rows.map((row,index) => row.render(index))}
            {this.buttons()}
        </form>;
    }
/*
    row(fieldName:string):JSX.Element {
        let index = this.rows.findIndex(r => r.contains(fieldName));
        if (index < 0) return null;
        return this.rows[index].render(index);
    }

    others():JSX.Element[] {
        let ret = [];
        let len = this.rows.length;
        for (let i=0; i<len; i++) {
            let r = this.rows[i];
            if (r.key !== undefined) continue;
            ret.push(r.render(i));
        }
        return ret;
    }
*/
    buttons():JSX.Element {
        return this.buttonsRow.render(this.rows.length);
    }

    async onSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let values = this.readValues();
        await this.props.onSumit(values);
    }
}
