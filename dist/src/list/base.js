import * as React from 'react';
export class ListBase {
    constructor(list) {
        this.list = list;
    }
    get items() { return this.list.props.items; }
    get selectedItems() { return; }
    updateProps(nextProps) { }
    renderContent(item, index) {
        let { render } = this.list.props.item;
        if (render === undefined)
            return React.createElement("div", { className: "px-3 py-2" }, JSON.stringify(item));
        return render(item, index);
    }
}
//# sourceMappingURL=base.js.map