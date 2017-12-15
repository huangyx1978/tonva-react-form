/// <reference types="react" />
import { FormView } from '../formView';
import { Field } from '../field';
import { Face } from '../face';
import { Rule } from '../rule';
export declare abstract class ControlBase {
    protected formView: FormView;
    constructor(formView: FormView);
    abstract render(): JSX.Element;
}
export declare abstract class Control extends ControlBase {
    protected field: Field;
    protected face: Face;
    protected props: any;
    protected rules: Rule[];
    protected value: any;
    constructor(formView: FormView, field: Field, face: Face);
    protected init(): void;
    protected setProps(): any;
    readonly hasError: boolean;
    readonly filled: boolean;
    readValues(values: any): any;
    setError(fieldName: string, error: string): void;
    setInitValues(values: any): void;
}
