import * as React from 'react';
import {FieldBase, TextField} from '../field';
import {Control} from './control';
import {InputControl, InputProps} from './input';
import {FieldView, LabelFieldView, LabelFieldViewProps} from './fieldView';
import {FormView} from '../formView';

class StringControl extends InputControl {
    protected field:TextField;
    constructor(field:TextField, props:InputProps) {
        super(field, props);
    }
    render():JSX.Element {
        return <div/>;
    }
}

class StringView extends LabelFieldView {
    constructor(form:FormView, control:StringControl, props: LabelFieldViewProps) {
        super(form, control, props);
    }

}

export function stringView(form: FormView, field: TextField, props: InputProps):FieldView {
    let nc = new StringControl(field, props);
    let nv = new StringView(form, nc, props);
    return nv;
}
