import * as React from 'react';
import * as classNames from 'classnames';
import {List, ListProps} from './list';

export abstract class ListBase {
    protected list: List;
    //protected props: ListProps;
    constructor(list: List) {
        this.list = list;
        //this.props = props;
    }
    get items() {return this.list.props.items}
    get selectedItems():any[] { return; }
    //set selectedItems(value: any[]) {}
    updateProps(nextProps:any) {}
    abstract render(item:any, index:number):JSX.Element;
    protected renderContent(item:any, index:number) {
        let {render} = this.list.props.item;
        return render(item, index);
    }
}
