import * as React from 'react';
import {FormView, FormRow} from '../formView';
import {Control, createControl, CreateControl} from '../control';

export type CreateRow = (form:FormView, row: FormRow)=>RowContainer;

export abstract class RowContainer {
    protected form:FormView;
    protected row: FormRow;
    protected control: Control;
    constructor(form:FormView, row: FormRow) {
        this.form = form;
        this.row = row;
        let cc:CreateControl = row.createControl;
        if (cc === undefined) cc = form.createControl;
        if (cc === undefined) cc = createControl;
        this.control = cc(form, row);
    }
    abstract render(key:number|string):JSX.Element;

    get key():number|string {return this.row.key}
    get hasError():boolean {return this.control.hasError;}
    get filled():boolean {return this.control.filled;}
    readValues(values:any):any {
        if (this.control !== undefined) this.control.readValues(values);
    }
    setError(fieldName:string, error:string) {
        if (this.control !== undefined) this.control.setError(fieldName, error);
    }
    setInitValues(values:any) {
        if (this.control !== undefined) this.control.setInitValues(values);
    }
}

class BootStrapRowContainer extends RowContainer {
    render(key:number|string):JSX.Element {
        return <div key={key} className='form-group row'>
            <label className='col-sm-2 col-form-label'>
                {this.row.label}
            </label>
            {this.control.render()}
        </div>;

        //has-success is-valid
    }
}

export function bootstrapRowCreator(form:FormView, row: FormRow):RowContainer {
    return new BootStrapRowContainer(form, row);
}
