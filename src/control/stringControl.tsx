import * as React from 'react';
import * as _ from 'lodash';
import {CharsControl} from './charsControl';
import {StringField} from '../field';

export class StringControl extends CharsControl {
    protected field: StringField;
    protected inputType: string = "text";
    protected setProps() {
        let p = super.setProps();
        _.assign(p, {
            maxLength: this.field.maxLength,
        });
        return p;
    };
}
