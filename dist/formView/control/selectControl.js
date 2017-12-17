import * as React from 'react';
import { Control } from './control';
export class SelectControl extends Control {
    render() {
        return React.createElement("div", { className: "col-sm-10" },
            React.createElement("div", { className: "form-control-static" },
                React.createElement("select", { name: this.field.name, className: "form-control" }, this.face.list.map((item, index) => {
                    let t, v;
                    if (typeof item !== 'object')
                        t = v = item;
                    else {
                        t = item.text;
                        v = item.value;
                    }
                    return React.createElement("option", { key: index, value: v }, t);
                }))));
    }
}
//# sourceMappingURL=selectControl.js.map