/// <reference types="react" />
import { CharsControl } from './charsControl';
import { StringField } from '../field';
export declare class TextAreaControl extends CharsControl {
    protected field: StringField;
    protected setProps(): any;
    protected renderInput(): JSX.Element;
}
