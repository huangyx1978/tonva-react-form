import { FormEvent } from 'react';
import { Rule } from './rule';
import { Field } from './field';
import { Face } from './face';
import { CreateControl } from './control';
import { CreateRow } from './rowContainer';
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
export declare type LabelFormRow = FieldRow | GroupRow | LabeledRow;
export declare type FormRow = LabelFormRow | JSX.Element;
export interface SubmitResult {
    success: boolean;
    message?: string;
    result?: any;
}
export interface FormProps {
    formRows: FormRow[];
    rules?: Rule | Rule[];
    onSubmit: (values: any) => Promise<SubmitResult | undefined>;
    submitButton?: string | JSX.Element;
    otherButton?: string | JSX.Element;
    onOther?: (values: any) => void;
    createRow?: CreateRow;
    createControl?: CreateControl;
    readOnly?: boolean;
}
export declare class FormView {
    uid: string;
    private rows;
    private buttonsRow;
    props: FormProps;
    createControl?: CreateControl;
    constructor(props: FormProps);
    readonly hasError: boolean;
    readonly nothing: boolean;
    readValues(): any;
    clear(): void;
    clearErrors(): void;
    setError(fieldName: string, error: string): void;
    setInitValues(initValues: any): void;
    private buildRows;
    private buildRow;
    private createButtons;
    private isOk;
    render(): JSX.Element;
    buttons(): JSX.Element;
    onSubmit(event: FormEvent<HTMLFormElement>): Promise<void>;
}
