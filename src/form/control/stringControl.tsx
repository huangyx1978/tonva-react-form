import * as React from 'react';
import * as _ from 'lodash';
import {CharsControl} from './charsControl';
import {StringField} from '../field';
import { StringFace } from '../face';

export class StringControl extends CharsControl {
    protected field: StringField;
    protected face: StringFace;
    protected setProps() {
        let p = super.setProps();
        _.assign(p, {
            type: 'text',
            maxLength: this.field.maxLength,
            readOnly: this.face && this.face.readonly
        });
        return p;
    };
    protected parseValue(value?:string):any {
        if (value === undefined) return undefined;
        if (value.trim().length === 0) return undefined;
        return value;
    }
}

export class PasswordControl extends StringControl {
    protected setProps() {
        let p = super.setProps();
        _.assign(p, {
            type: 'password',
            maxLength: this.field.maxLength,
        });
        return p;
    };
}