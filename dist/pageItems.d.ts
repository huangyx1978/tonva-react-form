import { IObservableArray } from 'mobx';
export declare abstract class PageItems<T> {
    constructor(itemObservable?: boolean);
    private beforeLoad;
    protected loaded: boolean;
    protected _items: IObservableArray<T>;
    allLoaded: boolean;
    readonly items: IObservableArray<T>;
    topDiv: string;
    bottomDiv: string;
    scrollToTop(): void;
    scrollToBottom(): void;
    protected param: any;
    protected pageStart: any;
    protected pageSize: number;
    protected appendPosition: 'head' | 'tail';
    protected abstract load(): Promise<T[]>;
    protected abstract setPageStart(item: T): any;
    reset(): void;
    append(item: T): void;
    first(param: any): Promise<void>;
    more(): Promise<void>;
}
