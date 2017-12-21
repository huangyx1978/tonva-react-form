export class ListBase {
    constructor(list, props) {
        this.list = list;
        this.props = props;
    }
    get items() { return this.props.items; }
    renderContent(item, index) {
        let { render } = this.props.item;
        return render(item, index);
    }
}
//# sourceMappingURL=base.js.map