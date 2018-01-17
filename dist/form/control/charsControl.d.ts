/// <reference types="react" />
import { Control } from './control';
export declare abstract class CharsControl extends Control {
    protected init(): void;
    protected element: HTMLInputElement;
    protected getValueFromElement(): any;
    protected setProps(): any;
    protected parseValue(value?: string): any;
    private onBlur();
    private onFocus();
    protected className(): string;
    protected renderInput(): JSX.Element;
    protected renderError(): JSX.Element;
    setError(fieldName: string, error: string): void;
    setInitValues(values: any): void;
    renderControl(): JSX.Element;
}
