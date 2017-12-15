import * as React from 'react';
import {FieldBase} from '../field';

export abstract class Control {
    protected field:FieldBase;
    constructor(field:FieldBase) {
        this.field = field;
    }
    abstract render():JSX.Element;
}
