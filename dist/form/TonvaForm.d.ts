/// <reference types="react" />
import * as React from 'react';
import { FormProps } from './formView';
export interface TonvaFormProps extends FormProps {
    className?: string;
    initValues?: any;
}
export declare class TonvaForm extends React.Component<TonvaFormProps, {}> {
    private formView;
    constructor(props: TonvaFormProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
