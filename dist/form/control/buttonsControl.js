import * as React from 'react';
import { ControlBase } from './control';
export class ButtonsControl extends ControlBase {
    constructor(props) {
        super(props);
        this.otherClick = this.otherClick.bind(this);
    }
    otherClick() {
        let onOther = this.formView.props.onOther;
        if (onOther === undefined)
            return;
        let values = this.formView.readValues();
        onOther(values);
    }
    renderControl() {
        let { nothing, hasError, props } = this.formView;
        let { submitButton, otherButton, onOther } = props;
        let btnOther;
        if (otherButton !== undefined) {
            btnOther = React.createElement("button", { className: "btn btn-outline-info ml-auto", onClick: this.otherClick }, otherButton);
        }
        return React.createElement("div", { className: "d-flex justify-content-start" },
            React.createElement("button", { className: "btn btn-primary", type: "submit" }, submitButton || '提交'),
            btnOther);
    }
}
//# sourceMappingURL=buttonsControl.js.map