/// <reference types="react" />
import { CheckBoxFace } from '../face';
import { Control } from './control';
export declare class CheckControl extends Control {
    protected element: HTMLInputElement;
    protected face: CheckBoxFace;
    setProps(): void;
    setInitValues(values: any): void;
    private onChange();
    render(): JSX.Element;
}
