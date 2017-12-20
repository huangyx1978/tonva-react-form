/// <reference types="react" />
import { LabeledProp, StringProp, NumberProp, ListProp, ComponentProp } from './propView';
export declare abstract class PropRow {
    abstract render(key: string): any;
}
export declare class PropBorder extends PropRow {
    render(key: string): JSX.Element;
}
export declare class PropGap extends PropRow {
    render(key: string): JSX.Element;
}
export declare abstract class LabeledPropRow extends PropRow {
    protected prop: LabeledProp;
    protected values: any;
    constructor(prop: LabeledProp, values: any);
    render(key: string): any;
    protected renderLabel(): any;
    protected renderProp(): any;
    protected renderPropBody(): any;
    protected renderPropContent(): any;
}
export declare class StringPropRow extends LabeledPropRow {
    protected prop: StringProp;
    protected renderPropContent(): any;
}
export declare class NumberPropRow extends LabeledPropRow {
    protected prop: NumberProp;
    protected renderPropContent(): any;
}
export declare class ListPropRow extends LabeledPropRow {
    protected prop: ListProp;
    protected renderPropBody(): JSX.Element;
}
export declare class ComponentPropRow extends LabeledPropRow {
    protected prop: ComponentProp;
    protected renderPropBody(): JSX.Element;
}
export declare class PropContainer extends PropRow {
    render(key: string): JSX.Element;
}
