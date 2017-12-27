export class ListBase {
    //protected props: ListProps;
    constructor(list) {
        this.list = list;
        //this.props = props;
    }
    get items() { return this.list.props.items; }
    get selectedItems() { return; }
    set selectedItems(value) { }
    renderContent(item, index) {
        let { render } = this.list.props.item;
        return render(item, index);
    }
}
//# sourceMappingURL=base.js.map