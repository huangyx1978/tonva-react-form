import * as React from 'react';
import { Control, ControlBase } from './control';
export class UnknownControl extends Control {
    render() {
        return React.createElement("div", { className: "col-sm-10" },
            React.createElement("div", { className: "form-control-static" },
                React.createElement("div", { className: "alert alert-primary", role: "alert" },
                    "don't know how to create control",
                    React.createElement("br", null),
                    "field: ",
                    JSON.stringify(this.field),
                    React.createElement("br", null),
                    "face: ",
                    JSON.stringify(this.face),
                    React.createElement("br", null))));
    }
}
export class EmptyControl extends ControlBase {
    constructor(formView, element) {
        super(formView);
        this.element = element;
    }
    render() {
        return React.createElement("div", { className: "col-sm-10" },
            React.createElement("div", { className: "form-control-static" }, this.element));
    }
}
//# sourceMappingURL=unknownControl.js.map