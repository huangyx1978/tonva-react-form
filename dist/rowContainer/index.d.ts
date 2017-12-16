/// <reference types="react" />
import { FormView, FormRow } from '../formView';
import { ControlBase } from '../control';
export declare type CreateRow = (form: FormView, row: FormRow) => RowContainer;
export declare abstract class RowContainer {
    protected form: FormView;
    protected row: FormRow;
    protected control: ControlBase;
    constructor(form: FormView, row: FormRow);
    abstract render(key: number | string): JSX.Element;
    contains(fieldName: string): boolean;
    readonly hasError: boolean;
    readonly filled: boolean;
    readValues(values: any): any;
    setError(fieldName: string, error: string): void;
    setInitValues(values: any): void;
}
export declare function bootstrapCreateRow(form: FormView, row: FormRow): RowContainer;
export declare function elementCreateRow(form: FormView, row: FormRow): RowContainer;
