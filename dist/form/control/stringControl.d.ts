import { CharsControl } from './charsControl';
import { StringField } from '../field';
export declare class StringControl extends CharsControl {
    protected field: StringField;
    protected setProps(): any;
    protected parseValue(value?: string): any;
}
export declare class PasswordControl extends StringControl {
    protected setProps(): any;
}
