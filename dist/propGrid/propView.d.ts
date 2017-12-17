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
export declare type Prop = StringProp | NumberProp | FormatProp | ListProp;
export interface PropViewProps {
    rows: (Prop | Prop[])[];
}
export declare class PropView {
    private props;
    private initValues;
    private containers;
    constructor(props: PropViewProps, initValues?: any);
    private buildRows();
}
