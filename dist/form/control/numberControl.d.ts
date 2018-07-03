import { IntField, DecField, NumberField } from '../field';
import { CharsControl } from './charsControl';
export declare class NumberControl extends CharsControl {
    protected field: IntField | DecField | NumberField;
    protected value: number;
    protected extraChars: number[];
    protected init(): void;
    protected parseValue(value?: string): any;
    protected setProps(): void;
    onKeyPress(event: KeyboardEvent): void;
    private onKeyDot;
    private onKeyNeg;
}
