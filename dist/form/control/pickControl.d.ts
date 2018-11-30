import { PickFace } from '../face';
import { Control } from './control';
export declare class PickControl extends Control {
    protected face: PickFace;
    private caption;
    private onClick;
    setInitValues(values: any): void;
    renderControl(): JSX.Element;
    private view;
}
