export class PropView {
    constructor(props, initValues) {
        this.props = props;
        this.initValues = initValues;
        this.buildRows();
    }
    buildRows() {
        let { rows } = this.props;
        this.containers = [];
    }
}
//# sourceMappingURL=propView.js.map