/// <reference types="react" />
import * as React from 'react';
import { FormView } from './formView';
export interface TonvaFormProps {
    className?: string;
    formView: FormView;
}
export declare class TonvaForm extends React.Component<TonvaFormProps, {}> {
    static childContextTypes: {
        formView: any;
    };
    getChildContext(): TonvaFormProps;
    componentDidMount(): void;
    componentWillUpdate(): void;
    render(): JSX.Element;
}
