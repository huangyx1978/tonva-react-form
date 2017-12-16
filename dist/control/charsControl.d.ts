/// <reference types="react" />
import { Control } from './control';
export declare abstract class CharsControl extends Control {
    protected init(): void;
    protected element: HTMLInputElement;
    protected isOK?: boolean;
    protected error: string;
    readonly hasError: boolean;
    protected setProps(): any;
    private ref(element);
    protected parseValue(value?: string): any;
    private onBlur();
    private onFocus();
    protected renderInput(): JSX.Element;
    protected renderError(): JSX.Element;
    setError(fieldName: string, error: string): void;
    setInitValues(values: any): void;
    render(): JSX.Element;
}
