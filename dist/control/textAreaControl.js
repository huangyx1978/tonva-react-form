import * as React from 'react';
import * as _ from 'lodash';
import { CharsControl } from './charsControl';
export class TextAreaControl extends CharsControl {
    setProps() {
        let p = super.setProps();
        _.assign(p, {
            maxLength: this.field.maxLength,
        });
        return p;
    }
    ;
    renderInput() {
        return React.createElement("textarea", Object.assign({ className: this.className() }, this.props));
    }
}
//# sourceMappingURL=textAreaControl.js.map