/// <reference types="react" />
import { FormView } from '../formView';
import { Field } from '../field';
import { Face, TuidPickFace } from '../face';
import { Control } from './control';
export declare class PickTuidControl extends Control {
    protected face: TuidPickFace;
    private caption;
    constructor(formView: FormView, field: Field, face: Face);
    onIdChanged(id: any): void;
    setInitValues(values: any): void;
    private buildContent();
    renderControl(): JSX.Element;
}
