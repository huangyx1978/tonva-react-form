export interface FieldFaceBase {
}

export interface InputFace extends FieldFaceBase {
    type: 'input';
    placeholder?: string;
}

export interface CheckBoxFace extends FieldFaceBase {
    type: 'checkbox';
}

export type Face = InputFace | CheckBoxFace;
