import {ListViewProps} from '../listView';
import {PropRow, PropBorder, PropGap, PropContainer,
    StringPropRow, NumberPropRow, ListPropRow, ComponentPropRow} from './row';

export interface Format {

}

export interface PropBase {
    onClick?: ()=>void;
}

export interface LabeledProp extends PropBase {
    label?: string;
    bk?: string;
}

export interface StringProp extends LabeledProp {
    type: 'string';
    name: string;
}

export interface NumberProp extends LabeledProp {
    type: 'number';
    name: string;
}

export interface FormatProp extends LabeledProp {
    type: 'format';
    format: Format;
}

export interface ListProp extends LabeledProp {
    type: 'list';
    list: string | any[];  // string 表示名字，否则就是值
    row: new (props:any) => React.Component;
}

export interface ComponentProp extends LabeledProp {
    type: 'component';
    component: JSX.Element;
}

export type Prop = StringProp | NumberProp | FormatProp | ListProp | ComponentProp | string;

export class PropView {
    private props: Prop[];
    //private values:any;
    private rows: PropRow[];

    constructor(props:Prop[]) {
        this.props = props;
        //this.values = values;
        this.buildRows();
    }

    private buildRows() {
        this.rows = [];
        let isGap:boolean = true;
        for (let prop of this.props) {
            if (typeof prop === 'string') {
                this.rows.push(new PropGap(prop));
                isGap = true;
            }
            else {
                if (!isGap) this.rows.push(new PropBorder());
                let row;
                switch (prop.type) {
                    default: continue;
                    case 'string': row = new StringPropRow(prop); break;
                    case 'number': row = new NumberPropRow(prop); break;
                    case 'list': row = new ListPropRow(prop); break;
                    case 'component': row = new ComponentPropRow(prop); break;
                }
                this.rows.push(row);
                isGap = false;
            }
        }
    }

    setValues(values: any) {
        for (let r of this.rows) r.setValues(values);
    }

    render() {
        return this.rows.map((row, index) => row.render(String(index)));
    }
}
