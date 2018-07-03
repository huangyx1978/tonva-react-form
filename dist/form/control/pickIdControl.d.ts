/// <reference types="react" />
import { FormView } from '../formView';
import { Field } from '../field';
import { Face, IdPickFace } from '../face';
import { Control } from './control';
export declare class PickIdControl extends Control {
    protected face: IdPickFace;
    private caption;
    constructor(formView: FormView, field: Field, face: Face);
    private onClick;
    onPicked(value: any): void;
    setInitValues(values: any): void;
    private controlContent;
    renderControl(): JSX.Element;
}
