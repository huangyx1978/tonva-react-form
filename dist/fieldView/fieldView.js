import * as React from 'react';
export class FieldView {
    constructor(form, field, props) {
        this.form = form;
        this.field = field;
        this.props = props;
    }
}
export class LabelFieldView extends FieldView {
    constructor(form, control, props) {
        super(form, control, props);
    }
    render() {
        return React.createElement("div", null);
    }
}
//# sourceMappingURL=fieldView.js.map