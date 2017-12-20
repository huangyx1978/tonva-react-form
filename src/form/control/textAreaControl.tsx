import * as React from 'react';
import * as _ from 'lodash';
import {CharsControl} from './charsControl';
import {StringField} from '../field';

export class TextAreaControl extends CharsControl {
    protected field: StringField;
    protected setProps() {
        let p = super.setProps();
        _.assign(p, {
            maxLength: this.field.maxLength,
        });
        return p;
    };
    protected renderInput():JSX.Element {
        return <textarea className={this.className()} {...this.props} />;
    }
}
