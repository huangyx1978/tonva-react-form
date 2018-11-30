import { List } from './list';
import { IObservableArray } from 'mobx';
export declare abstract class ListBase {
    protected list: List;
    constructor(list: List);
    readonly isPaged: boolean;
    readonly items: any[] | IObservableArray<any>;
    readonly loading: boolean;
    readonly selectedItems: any[];
    updateProps(nextProps: any): void;
    abstract render(item: any, index: number): JSX.Element;
    protected renderContent(item: any, index: number): JSX.Element;
}
