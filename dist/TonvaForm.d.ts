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
    render(): JSX.Element;
}
export declare namespace TonvaForm {
    class Row extends React.Component<{
        row: number | string;
    }> {
        static contextTypes: {
            formView: any;
        };
        context: TonvaFormProps;
        render(): JSX.Element;
    }
    class Others extends React.Component {
        static contextTypes: {
            formView: any;
        };
        context: TonvaFormProps;
        render(): JSX.Element[];
    }
    class Buttons extends React.Component {
        static contextTypes: {
            formView: any;
        };
        context: TonvaFormProps;
        render(): JSX.Element;
    }
}
