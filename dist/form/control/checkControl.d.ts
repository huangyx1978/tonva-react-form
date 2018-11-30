import { BoolField } from '../field';
import { CheckBoxFace } from '../face';
import { Control } from './control';
export declare class CheckControl extends Control {
    protected element: HTMLInputElement;
    protected field: BoolField;
    protected face: CheckBoxFace;
    private trueValue;
    private falseValue;
    protected init(): void;
    setProps(): void;
    clearValue(): void;
    setInitValues(values: any): void;
    protected getValueFromElement(): any;
    private onChange;
    renderControl(): JSX.Element;
}
