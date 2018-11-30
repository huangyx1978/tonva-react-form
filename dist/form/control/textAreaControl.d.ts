import { CharsControl } from './charsControl';
import { StringField } from '../field';
import { TextAreaFace } from '../face';
export declare class TextAreaControl extends CharsControl {
    protected field: StringField;
    protected face: TextAreaFace;
    private el;
    protected setProps(): any;
    protected renderInput(): JSX.Element;
}
