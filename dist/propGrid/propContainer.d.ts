/// <reference types="react" />
import { LabeledProp, StringProp, NumberProp } from './propView';
export declare abstract class PropRow {
    abstract render(key: number | string): JSX.Element;
}
export declare class PropBorder extends PropRow {
    render(key: number | string): JSX.Element;
}
export declare class PropGap extends PropRow {
    render(key: number | string): JSX.Element;
}
export declare abstract class LabeledPropRow extends PropRow {
    protected prop: LabeledProp;
    protected values: any;
    constructor(prop: LabeledProp, values: any);
    render(key: number | string): JSX.Element;
    protected renderLabel(): JSX.Element;
    protected renderProp(): JSX.Element;
    protected renderPropBody(): JSX.Element;
    protected renderPropContent(): string;
}
export declare class StringPropRow extends LabeledPropRow {
    protected prop: StringProp;
    protected renderPropContent(): any;
}
export declare class NumberPropRow extends LabeledPropRow {
    protected prop: NumberProp;
    protected renderPropContent(): any;
}
export declare class PropContainer extends PropRow {
    render(key: number | string): JSX.Element;
}
