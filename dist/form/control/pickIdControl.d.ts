/// <reference types="react" />
import { IdPickFace } from '../face';
import { Control } from './control';
export declare class PickIdControl extends Control {
    protected face: IdPickFace;
    private caption;
    private onClick;
    onPicked: (value: any) => void;
    setInitValues(values: any): void;
    private controlContent;
    renderControl(): JSX.Element;
}
