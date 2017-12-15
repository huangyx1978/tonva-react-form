/// <reference types="react" />
import { FormView, FormRow } from '../formView';
import { Control } from '../control';
export declare type CreateRow = (form: FormView, row: FormRow) => RowContainer;
export declare abstract class RowContainer {
    protected form: FormView;
    protected row: FormRow;
    protected control: Control;
    constructor(form: FormView, row: FormRow);
    abstract render(key: number | string): JSX.Element;
    readonly key: number | string;
    readonly hasError: boolean;
    readonly filled: boolean;
    readValues(values: any): any;
    setError(fieldName: string, error: string): void;
    setInitValues(values: any): void;
}
export declare function bootstrapRowCreator(form: FormView, row: FormRow): RowContainer;
