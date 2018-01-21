/// <reference types="react" />
import { ListBase } from './base';
export interface SelectableItem {
    selected: boolean;
    item: any;
    labelId: string;
}
export declare class Selectable extends ListBase {
    private _items;
    private input;
    readonly items: {
        selected: boolean;
        item: any;
        labelId: string;
    }[];
    private onSelect(item, selected);
    selectedItems: any[];
    render(item: SelectableItem, index: number): JSX.Element;
}
