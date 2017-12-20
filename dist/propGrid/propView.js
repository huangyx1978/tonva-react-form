import { PropBorder, PropGap, StringPropRow, NumberPropRow, ListPropRow, ComponentPropRow } from './row';
export class PropView {
    constructor(props, values) {
        this.props = props;
        this.values = values;
        this.buildRows();
    }
    buildRows() {
        this.rows = [];
        let isGap = true;
        for (let prop of this.props) {
            if (typeof prop === 'string') {
                this.rows.push(new PropGap());
                isGap = true;
            }
            else {
                if (!isGap)
                    this.rows.push(new PropBorder());
                let row;
                switch (prop.type) {
                    default: continue;
                    case 'string':
                        row = new StringPropRow(prop, this.values);
                        break;
                    case 'number':
                        row = new NumberPropRow(prop, this.values);
                        break;
                    case 'list':
                        row = new ListPropRow(prop, this.values);
                        break;
                    case 'component':
                        row = new ComponentPropRow(prop, this.values);
                        break;
                }
                this.rows.push(row);
                isGap = false;
            }
        }
    }
    render() {
        return this.rows.map((row, index) => row.render(String(index)));
    }
}
//# sourceMappingURL=propView.js.map