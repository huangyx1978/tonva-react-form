import * as React from 'react';
import { InputControl } from './input';
import { LabelFieldView } from './fieldView';
class StringControl extends InputControl {
    constructor(field, props) {
        super(field, props);
    }
    render() {
        return React.createElement("div", null);
    }
}
class StringView extends LabelFieldView {
    constructor(form, control, props) {
        super(form, control, props);
    }
}
export function stringView(form, field, props) {
    let nc = new StringControl(field, props);
    let nv = new StringView(form, nc, props);
    return nv;
}
//# sourceMappingURL=string.js.map