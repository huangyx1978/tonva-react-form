/// <reference types="react" />
import { FormView } from '../formView';
import { Field } from '../field';
import { Face, SelectFace } from '../face';
import { Control } from './control';
export declare class SelectControl extends Control {
    constructor(formView: FormView, field: Field, face: Face);
    protected face: SelectFace;
    protected element: HTMLSelectElement;
    protected getValueFromElement(): any;
    render(): JSX.Element;
}
