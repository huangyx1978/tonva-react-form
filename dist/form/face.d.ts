/// <reference types="react" />
import { FormProps } from './formView';
export interface FieldFaceBase {
    notes?: string;
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
export declare type Option = string | number | {
    text: string;
    value: string | number;
};
export interface SelectFace extends FieldFaceBase {
    type: 'select';
    list: Option[];
    default?: string | number;
}
export interface RadioFace extends FieldFaceBase {
    type: 'radiobox';
    list: Option[];
}
export interface TextAreaFace extends FieldFaceBase, Placeholder {
    type: 'textarea';
    maxLength?: number;
    rows?: number;
}
export declare type FromPicked = (item: any) => {
    id: number;
    caption?: string | JSX.Element;
};
export declare type ItemFromId = (id: number) => any;
export declare type TuidPick = (face: TuidPickFace, formProps: FormProps, params: any) => Promise<any>;
export interface TuidInputProps {
    id: number;
    tuid: string;
    input: any;
    entitiesUI: any;
    params: any;
    onPicked: (value: any) => void;
}
export declare type TuidInputComponent = new (props: TuidInputProps) => React.Component<TuidInputProps>;
export interface TuidPickFace extends FieldFaceBase {
    type: 'pick-tuid';
    tuid: string;
    input: {
        component: TuidInputComponent;
    };
    inputProps: any;
    initCaption: string | JSX.Element;
    pick: TuidPick;
    fromPicked: FromPicked;
    itemFromId?: ItemFromId;
}
export declare type IdPick = (face: IdPickFace, formProps: FormProps, params: any) => Promise<any>;
export interface IdPickFace extends FieldFaceBase {
    type: 'pick-id';
    tuid: string;
    input: {
        component: TuidInputComponent;
    };
    inputProps: any;
    initCaption: string | JSX.Element;
    pick: IdPick;
    fromPicked: FromPicked;
    itemFromId?: ItemFromId;
}
export declare type Face = StringFace | NumberFace | CheckBoxFace | SelectFace | RadioFace | TextAreaFace | TuidPickFace | IdPickFace;
