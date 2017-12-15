import { FieldBase } from '../field';
import { Control } from './control';
export interface InputProps {
    type: 'number';
    placeholder?: string;
}
export declare abstract class InputControl extends Control {
    protected props: InputProps;
    constructor(field: FieldBase, props: InputProps);
}
