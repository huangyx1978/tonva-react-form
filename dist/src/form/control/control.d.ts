/// <reference types="react" />
import { FormView } from '../formView';
import { Field } from '../field';
import { Face } from '../face';
import { Rule } from '../rule';
export declare abstract class ControlBase {
    protected formView: FormView;
    constructor(formView: FormView);
    render(): JSX.Element;
    protected abstract renderControl(): JSX.Element;
    readonly hasError: boolean;
    readonly filled: boolean;
    clear(): void;
    clearErrors(): void;
    readValues(values: any): any;
    setError(fieldName: string, error: string): void;
    setInitValues(values: any): void;
    isOk(): boolean;
    protected validate(): void;
}
export declare abstract class Control extends ControlBase {
    protected field: Field;
    protected face: Face;
    protected props: any;
    protected rules: Rule[];
    protected element: HTMLElement;
    protected isOK?: boolean;
    protected error: string;
    protected value: any;
    constructor(formView: FormView, field: Field, face: Face);
    protected ref(element: HTMLElement): void;
    protected init(): void;
    protected setProps(): any;
    readonly hasError: boolean;
    readonly filled: boolean;
    clearValue(): void;
    clear(): void;
    clearErrors(): void;
    readValues(values: any): any;
    setError(fieldName: string, error: string): void;
    setInitValues(values: any): void;
    protected getValueFromElement(): any;
    protected validate(): void;
    render(): JSX.Element;
}
