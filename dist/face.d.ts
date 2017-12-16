/// <reference types="react" />
export interface FieldFaceBase {
}
export interface InputFace extends FieldFaceBase {
    type: 'input';
    placeholder?: string;
}
export interface CheckBoxFace extends FieldFaceBase {
    type: 'checkbox';
    label?: string;
}
export declare type Option = string | number | {
    text: string;
    value: string | number;
};
export interface SelectFace extends FieldFaceBase {
    type: 'select';
    list: Option[];
}
export interface RadioFace extends FieldFaceBase {
    type: 'radiobox';
    list: Option[];
}
export interface IdPickResult {
    id: number;
    element: string | JSX.Element;
}
export declare type IdPick = (face: IdPickFace) => Promise<IdPickResult>;
export interface IdPickFace extends FieldFaceBase {
    type: 'pick-id';
    text: string;
    pick: IdPick;
}
export declare type Face = InputFace | CheckBoxFace | SelectFace | RadioFace | IdPickFace;
