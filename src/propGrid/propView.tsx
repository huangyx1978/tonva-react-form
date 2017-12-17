import {PropContainer} from './propContainer';

export interface Format {

}

export interface LabeledProp {
    label: string;
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
    name: string;
    format: Format;
}

export type Prop = StringProp | NumberProp | FormatProp | ListProp;

export interface PropViewProps {
    rows: (Prop|Prop[])[];
}

export class PropView {
    private props: PropViewProps;
    private initValues:any;
    private containers: PropContainer[];

    constructor(props:PropViewProps, initValues?:any) {
        this.props = props;
        this.initValues = initValues;
        this.buildRows();
    }

    private buildRows() {
        let {rows} = this.props;
        this.containers = [];


    }
}
