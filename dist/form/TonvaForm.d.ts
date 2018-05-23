/// <reference types="react" />
import * as React from 'react';
import { FormView, FormProps } from './formView';
export declare function tonvaDebug(): void;
export interface TonvaFormProps extends FormProps {
    className?: string;
    initValues?: any;
}
export declare class TonvaForm extends React.Component<TonvaFormProps, {}> {
    formView: FormView;
    constructor(props: TonvaFormProps);
    componentWillMount(): void;
    debug(): void;
    render(): JSX.Element;
}
