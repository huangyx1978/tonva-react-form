import * as React from 'react';
export class ListBase {
    //protected props: ListProps;
    constructor(list) {
        this.list = list;
        //this.props = props;
    }
    get items() { return this.list.props.items; }
    get selectedItems() { return; }
    //set selectedItems(value: any[]) {}
    updateProps(nextProps) { }
    renderContent(item, index) {
        let { render } = this.list.props.item;
        if (render === undefined)
            return React.createElement("div", { className: "px-3 py-2" }, JSON.stringify(item));
        return render(item, index);
    }
}
//# sourceMappingURL=base.js.map