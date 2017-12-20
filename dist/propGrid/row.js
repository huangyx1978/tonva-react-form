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
        let { onClick } = this.prop;
        let style;
        if (onClick !== undefined) {
            style = { cursor: 'pointer' };
        }
        return React.createElement("div", { key: key, className: "row bg-white", onClick: onClick, style: style },
            this.renderLabel(),
            this.renderProp());
    }
    renderLabel() {
        let { label } = this.prop;
        if (label === undefined)
            return null;
        return React.createElement("label", { className: "col-sm-2 col-form-label" }, label);
    }
    renderProp() {
        let { label } = this.prop;
        return React.createElement("div", { className: label === undefined ? "col-sm-12" : "col-sm-10" }, this.renderPropBody());
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
export class ListPropRow extends LabeledPropRow {
    renderPropBody() {
        let { list, row } = this.prop;
        let items = typeof list === 'string' ? this.values[name] : list;
        if (items === undefined)
            return React.createElement("div", null);
        // new row(item)
        return React.createElement("div", null, items.map((item, index) => React.createElement(React.Fragment, { key: index },
            index === 0 ? null : React.createElement("div", { style: { borderBottom: '1px solid #f0f0f0' } }),
            React.createElement(row, item))));
    }
}
export class ComponentPropRow extends LabeledPropRow {
    renderPropBody() {
        let { component } = this.prop;
        return component;
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
//# sourceMappingURL=row.js.map