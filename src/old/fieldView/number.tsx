import * as React from 'react';
import {FieldBase, NumField} from '../field';
import {Control} from './control';
import {InputControl, InputProps} from './input';
import {FieldView, FieldViewProps, LabelFieldView, LabelFieldViewProps} from './fieldView';
import {FormView} from '../formView';

class NumControl extends InputControl {
    protected field:NumField;
    constructor(field:NumField, props:InputProps) {
        super(field, props);
    }
    render():JSX.Element {
        return <div/>;
    }
}

export interface LabelNumProps extends LabelFieldViewProps {
    placeholder?:string;
}

class NumView extends LabelFieldView {
    constructor(form:FormView, control:NumControl, props: LabelFieldViewProps) {
        super(form, control, props);
    }

}

export function numView(form:FormView, field: NumField, props: LabelNumProps):FieldView {
    let nc = new NumControl(field, {type:'number', placeholder: props.placeholder});
    let nv = new NumView(form, nc, props);
    return nv;
}
