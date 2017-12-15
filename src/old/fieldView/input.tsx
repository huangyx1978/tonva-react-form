import * as React from 'react';
import {FieldBase} from '../field';
import {Control} from './control';

export interface InputProps {
    type: 'number';
    //label?: string;
    placeholder?: string;
}

export abstract class InputControl extends Control {
    protected props:InputProps;
    constructor(field:FieldBase, props:InputProps) {
        super(field);
        this.props = props;
    }
}
