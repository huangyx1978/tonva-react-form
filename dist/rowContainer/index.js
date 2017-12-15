import * as React from 'react';
import { createControl } from '../control';
export class RowContainer {
    constructor(form, row) {
        this.form = form;
        this.row = row;
        let cc = row.createControl;
        if (cc === undefined)
            cc = form.createControl;
        if (cc === undefined)
            cc = createControl;
        this.control = cc(form, row);
    }
    get key() { return this.row.key; }
    get hasError() { return this.control.hasError; }
    get filled() { return this.control.filled; }
    readValues(values) {
        if (this.control !== undefined)
            this.control.readValues(values);
    }
    setError(fieldName, error) {
        if (this.control !== undefined)
            this.control.setError(fieldName, error);
    }
    setInitValues(values) {
        if (this.control !== undefined)
            this.control.setInitValues(values);
    }
}
class BootStrapRowContainer extends RowContainer {
    render(key) {
        return React.createElement("div", { key: key, className: 'form-group row' },
            React.createElement("label", { className: 'col-sm-2 col-form-label' }, this.row.label),
            this.control.render());
        //has-success is-valid
    }
}
export function bootstrapRowCreator(form, row) {
    return new BootStrapRowContainer(form, row);
}
//# sourceMappingURL=index.js.map