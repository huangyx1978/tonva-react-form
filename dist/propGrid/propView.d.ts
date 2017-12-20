/// <reference types="react" />
export interface Format {
}
export interface PropBase {
    onClick?: () => void;
}
export interface LabeledProp extends PropBase {
    label?: string;
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
    list: string | any[];
    row: new (props: any) => React.Component;
}
export interface ComponentProp extends LabeledProp {
    type: 'component';
    component: JSX.Element;
}
export declare type Prop = StringProp | NumberProp | FormatProp | ListProp | ComponentProp | string;
export declare class PropView {
    private props;
    private values;
    private rows;
    constructor(props: Prop[], values?: any);
    private buildRows();
    render(): any[];
}
