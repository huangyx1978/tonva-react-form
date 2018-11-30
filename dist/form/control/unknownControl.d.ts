import { Control, ControlBase } from './control';
import { FormView } from '../formView';
export declare class UnknownControl extends Control {
    renderControl(): JSX.Element;
}
export declare class EmptyControl extends ControlBase {
    private element;
    constructor(formView: FormView, element: JSX.Element);
    renderControl(): JSX.Element;
}
