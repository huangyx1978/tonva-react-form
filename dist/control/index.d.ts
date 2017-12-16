export * from './control';
export * from './buttonsControl';
export * from './stringControl';
export * from './numberControl';
import { ControlBase } from './control';
import { FormView, FormRow } from '../formView';
export declare type CreateControl = (form: FormView, row: FormRow) => ControlBase;
export declare const createControl: CreateControl;
