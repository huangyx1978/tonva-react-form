import * as React from 'react';
import { Control } from './control';
export class CheckControl extends Control {
    render() {
        return React.createElement("div", { className: "col-sm-10" },
            React.createElement("div", { className: "form-control-static" },
                React.createElement("label", { className: "form-control" },
                    React.createElement("label", { className: "custom-control custom-checkbox mb-0" },
                        React.createElement("input", { type: 'checkbox', name: this.field.name, className: "custom-control-input" }),
                        React.createElement("span", { className: "custom-control-indicator" }),
                        React.createElement("span", { className: "custom-control-description" }, this.face.label)))));
    }
}
//# sourceMappingURL=checkControl.js.map