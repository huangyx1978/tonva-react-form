import * as React from 'react';
import * as classNames from 'classnames';
import {List} from './list';
import {ListProps} from './listProps';

export abstract class ListBase {
    protected list: List;
    protected props: ListProps;
    constructor(list: List, props: ListProps) {
        this.list = list;
        this.props = props;
    }
    get items() {return this.props.items}
    abstract render(item:any, index:number):JSX.Element;
    protected renderContent(item:any, index:number) {
        let {contentClass, render} = this.props.item;
        return <div className={classNames(contentClass)}>{render(item, index)}</div>
    }
}
