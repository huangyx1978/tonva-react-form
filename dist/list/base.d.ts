/// <reference types="react" />
import { List } from './list';
export declare abstract class ListBase {
    protected list: List;
    constructor(list: List);
    readonly items: any[];
    readonly selectedItems: any[];
    updateProps(nextProps: any): void;
    abstract render(item: any, index: number): JSX.Element;
    protected renderContent(item: any, index: number): JSX.Element;
}
