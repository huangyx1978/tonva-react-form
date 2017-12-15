/// <reference types="react" />
import { FieldBase } from '../field';
import { Control } from './control';
import { FormView } from '../formView';
export interface FieldViewProps {
    type?: 'input' | 'check' | 'radio' | 'select' | 'page';
}
export declare abstract class FieldView {
    protected form: FormView;
    protected field: FieldBase;
    protected props: FieldViewProps;
    constructor(form: FormView, field: FieldBase, props: FieldViewProps);
    abstract render(): JSX.Element;
}
export interface LabelFieldViewProps extends FieldViewProps {
    label?: string;
}
export declare abstract class LabelFieldView extends FieldView {
    constructor(form: FormView, control: Control, props: LabelFieldViewProps);
    render(): JSX.Element;
}
