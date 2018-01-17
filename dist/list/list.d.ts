/// <reference types="react" />
import * as React from 'react';
import "../css/va-list.css";
export declare type StaticRow = string | JSX.Element | ((items: any) => string | JSX.Element);
export interface ListProps {
    className?: string | string[];
    items: any[];
    item: {
        className?: string | string[];
        render: (item: any, index: number) => JSX.Element;
        onSelect?: (item: any, isSelected: boolean, anySelected: boolean) => void;
        onClick?: (item: any) => void;
    };
    header?: StaticRow;
    footer?: StaticRow;
    before?: StaticRow;
    loading?: StaticRow;
    none?: StaticRow;
}
export declare class List extends React.Component<ListProps> {
    private listBase;
    constructor(props: ListProps);
    selectedItems: any[];
    render(): JSX.Element;
}
