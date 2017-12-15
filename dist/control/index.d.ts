export * from './control';
export * from './buttonsControl';
export * from './stringControl';
export * from './numberControl';
import { Control } from './control';
import { FormView, FormRow } from '../formView';
export declare type CreateControl = (form: FormView, row: FormRow) => Control;
export declare const createControl: CreateControl;
