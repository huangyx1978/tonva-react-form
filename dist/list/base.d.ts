/// <reference types="react" />
import { List } from './list';
import { ListProps } from './listProps';
export declare abstract class ListBase {
    protected list: List;
    protected props: ListProps;
    constructor(list: List, props: ListProps);
    readonly items: any[];
    abstract render(item: any, index: number): JSX.Element;
    protected renderContent(item: any, index: number): JSX.Element;
}
