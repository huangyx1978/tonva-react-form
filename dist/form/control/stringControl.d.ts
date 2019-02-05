import { CharsControl } from './charsControl';
import { StringField } from '../field';
import { StringFace } from '../face';
export declare class StringControl extends CharsControl {
    protected field: StringField;
    protected face: StringFace;
    protected setProps(): any;
    protected parseValue(value?: string): any;
}
export declare class PasswordControl extends StringControl {
    protected setProps(): any;
}
