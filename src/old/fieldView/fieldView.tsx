import * as React from 'react';
import {FieldBase} from '../field';
import {Control} from './control';
import {FormView} from '../formView';

export interface FieldViewProps {
    type?: 'input' | 'check' | 'radio' | 'select' | 'page'
}

export abstract class FieldView {
    protected form:FormView;
    protected field:FieldBase;
    protected props: FieldViewProps;

    constructor(form:FormView, field:FieldBase, props: FieldViewProps) {
        this.form = form;
        this.field = field;
        this.props = props;
    }
    abstract render(): JSX.Element;
}

export interface LabelFieldViewProps extends FieldViewProps {
    label?: string;
}

export abstract class LabelFieldView extends FieldView {
    constructor(form:FormView, control:Control, props: LabelFieldViewProps) {
        super(form, control, props);
    }
    render(): JSX.Element {
        return <div />;
    }
}
