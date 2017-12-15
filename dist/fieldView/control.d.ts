/// <reference types="react" />
import { FieldBase } from '../field';
export declare abstract class Control {
    protected field: FieldBase;
    constructor(field: FieldBase);
    abstract render(): JSX.Element;
}
