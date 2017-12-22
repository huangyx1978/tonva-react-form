export class ListBase {
    //protected props: ListProps;
    constructor(list) {
        this.list = list;
        //this.props = props;
    }
    get items() { return this.list.props.items; }
    renderContent(item, index) {
        let { render } = this.list.props.item;
        return render(item, index);
    }
}
//# sourceMappingURL=base.js.map