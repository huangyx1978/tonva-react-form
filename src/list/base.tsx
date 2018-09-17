import * as React from 'react';
import {List} from './list';

export abstract class ListBase {
    protected list: List;
    constructor(list: List) {
        this.list = list;
    }
    get items() {return this.list.props.items}
    get selectedItems():any[] { return; }
    updateProps(nextProps:any) {}
    abstract render(item:any, index:number):JSX.Element;
    protected renderContent(item:any, index:number) {
        let {render} = this.list.props.item;
        if (render === undefined) return <div className="px-3 py-2">{JSON.stringify(item)}</div>;
        return render(item, index);
    }
}
