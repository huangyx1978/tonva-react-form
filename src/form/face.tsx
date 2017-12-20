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

export type FromItem = (item:any)=>{id:number, caption?:string|JSX.Element};
export type IdPick = (face: IdPickFace) => Promise<any>;
export interface IdPickFace extends FieldFaceBase {
    type: 'pick-id';
    initCaption: string|JSX.Element;
    pick: IdPick;
    fromItem: FromItem;
}

export type Face = StringFace | NumberFace | CheckBoxFace | SelectFace | RadioFace | TextAreaFace | IdPickFace;
