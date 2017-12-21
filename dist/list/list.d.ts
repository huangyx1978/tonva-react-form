/// <reference types="react" />
import * as React from 'react';
import { ListProps } from './listProps';
import "../css/va-list.css";
export declare class List extends React.Component<ListProps> {
    private listBase;
    constructor(props: ListProps);
    render(): JSX.Element;
}
