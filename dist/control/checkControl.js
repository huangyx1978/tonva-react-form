import * as React from 'react';
import * as _ from 'lodash';
import { Control } from './control';
export class CheckControl extends Control {
    setProps() {
        super.setProps();
        _.assign(this.props, {
            onChange: this.onChange.bind(this),
        });
    }
    setInitValues(values) {
        let v = values[this.field.name];
        if (v === undefined) {
            v = this.field.defaultValue;
        }
        if (v !== undefined) {
            this.element.checked = v !== 0;
            this.value = v;
        }
    }
    onChange() {
        this.value = this.element.checked ? 1 : 0;
    }
    render() {
        return React.createElement("div", { className: "col-sm-10" },
            React.createElement("div", { className: "form-control-static" },
                React.createElement("label", { className: "form-control" },
                    React.createElement("label", { className: "custom-control custom-checkbox mb-0" },
                        React.createElement("input", { type: 'checkbox', name: this.field.name, ref: this.props.ref, onChange: this.props.onChange, className: "custom-control-input" }),
                        React.createElement("span", { className: "custom-control-indicator" }),
                        React.createElement("span", { className: "custom-control-description" }, this.face.label)))));
    }
}
//# sourceMappingURL=checkControl.js.map