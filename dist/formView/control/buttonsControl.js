import * as React from 'react';
import { ControlBase } from './control';
export class ButtonsControl extends ControlBase {
    render() {
        return React.createElement("div", { className: "col-sm-10" },
            React.createElement("div", { className: "form-control-static" },
                React.createElement("button", { className: "btn btn-primary", type: "submit", disabled: this.formView.nothing || this.formView.hasError }, this.formView.props.submitButton || '提交')));
    }
}
//# sourceMappingURL=buttonsControl.js.map