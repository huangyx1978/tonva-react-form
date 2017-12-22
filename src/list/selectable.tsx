import * as React from 'react';
import {observable, computed} from 'mobx';
import * as classNames from 'classnames';
import {ListBase} from './base';

export interface SelectableItem {
    selected: boolean;
    item: any;
}

export class Selectable extends ListBase {
    private _items: SelectableItem[];
    @computed get items() {return this._items = this.list.props.items.map(v => {return {selected:false, item:v}})}
    private onSelect(item:SelectableItem, selected:boolean) {
        item.selected = selected;
        let anySelected = this._items.some(v => v.selected);
        this.list.props.item.onSelect(item.item, selected, anySelected);
    }
    //w-100 mb-0 pl-3
    //m-0 w-100
    render(item:SelectableItem, index:number):JSX.Element {
        let {className, render, onSelect} = this.list.props.item;
        return <li key={index} className={classNames(className)}>
            <label className="">
                <label className="custom-control custom-checkbox">
                    <input type='checkbox' className="custom-control-input"
                        //checked={selected}
                        onChange={(e)=>this.onSelect(item, e.target.checked)} />
                    <span className="custom-control-indicator" />
                </label>
                {this.renderContent(item.item, index)}
            </label>
        </li>
    }
}
