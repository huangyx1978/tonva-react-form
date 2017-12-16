export interface FieldFaceBase {
}

export interface Placeholder {
    placeholder?: string;
}

export interface StringFace extends FieldFaceBase, Placeholder {
    type: 'string';
}

export interface NumberFace extends FieldFaceBase, Placeholder {
    type: 'number';
}

export interface CheckBoxFace extends FieldFaceBase {
    type: 'checkbox';
    label?: string;
}

export type Option = string | number | {text:string, value:string | number};

export interface SelectFace extends FieldFaceBase {
    type: 'select';
    list: Option[];
}

export interface RadioFace extends FieldFaceBase {
    type: 'radiobox';
    list: Option[];
}

export interface TextAreaFace extends FieldFaceBase, Placeholder {
    type: 'textarea';
    maxLength?: number;
}

export interface IdPickResult {
    id: number; 
    message: string|JSX.Element;
}
export type IdPick = (face: IdPickFace) => Promise<IdPickResult>;
export interface IdPickFace extends FieldFaceBase {
    type: 'pick-id';
    text: string;
    pick: IdPick;
}

export type Face = StringFace | NumberFace | CheckBoxFace | SelectFace | RadioFace | TextAreaFace | IdPickFace;
