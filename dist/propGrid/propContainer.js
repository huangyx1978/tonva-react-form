import * as React from 'react';
export class PropRow {
}
export class PropBorder extends PropRow {
    render(key) {
        return React.createElement("div", { key: '_b_' + key, className: "row" },
            React.createElement("div", { className: "col-sm-12" },
                React.createElement("div", { style: { borderTop: '1px solid #f0f0f0' } })));
    }
}
export class PropGap extends PropRow {
    render(key) {
        return React.createElement("div", { key: '_g_' + key, className: "row py-2", style: { backgroundColor: '#f0f0f0' } });
    }
}
export class LabeledPropRow extends PropRow {
    constructor(prop, values) {
        super();
        this.prop = prop;
        this.values = values;
    }
    render(key) {
        return React.createElement("div", { className: "row bg-white" },
            this.renderLabel(),
            this.renderProp());
    }
    renderLabel() {
        return React.createElement("label", { className: "col-sm-2 col-form-label" }, this.prop.label);
    }
    renderProp() {
        return React.createElement("div", { className: "col-sm-10" }, "this.renderPropBody();");
    }
    renderPropBody() {
        return React.createElement("div", { className: "form-control-plaintext" }, this.renderPropContent());
    }
    renderPropContent() {
        return 'content';
    }
}
export class StringPropRow extends LabeledPropRow {
    renderPropContent() {
        return this.values[this.prop.name];
    }
}
export class NumberPropRow extends LabeledPropRow {
    renderPropContent() {
        return this.values[this.prop.name];
    }
}
export class PropContainer extends PropRow {
    render(key) {
        return React.createElement("div", { className: "row bg-white" },
            React.createElement("label", { className: "col-sm-2 col-form-label" }, "AAABBBCCC"),
            React.createElement("div", { className: "col-sm-10" },
                React.createElement("div", { className: "form-control-plaintext" }, "dsfasfa sdf asdf a")));
    }
}
//# sourceMappingURL=propContainer.js.map