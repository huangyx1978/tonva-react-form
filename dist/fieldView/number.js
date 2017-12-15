import * as React from 'react';
import { InputControl } from './input';
import { LabelFieldView } from './fieldView';
class NumControl extends InputControl {
    constructor(field, props) {
        super(field, props);
    }
    render() {
        return React.createElement("div", null);
    }
}
class NumView extends LabelFieldView {
    constructor(form, control, props) {
        super(form, control, props);
    }
}
export function numView(form, field, props) {
    let nc = new NumControl(field, { type: 'number', placeholder: props.placeholder });
    let nv = new NumView(form, nc, props);
    return nv;
}
//# sourceMappingURL=number.js.map