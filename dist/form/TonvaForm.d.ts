/// <reference types="react" />
import * as React from 'react';
import { FormView, FormProps } from './formView';
export interface TonvaFormProps extends FormProps {
    className?: string;
    initValues?: any;
}
export declare class TonvaForm extends React.Component<TonvaFormProps, {}> {
    private formView;
    constructor(props: TonvaFormProps);
    static childContextTypes: {
        formView: any;
    };
    getChildContext(): FormView;
    componentDidMount(): void;
    componentWillUpdate(): void;
    render(): JSX.Element;
}
