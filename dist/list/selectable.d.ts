/// <reference types="react" />
import { ListBase } from './base';
export interface SelectableItem {
    selected: boolean;
    item: any;
}
export declare class Selectable extends ListBase {
    private _items;
    readonly items: {
        selected: boolean;
        item: any;
    }[];
    private onSelect(item, selected);
    render(item: SelectableItem, index: number): JSX.Element;
}
