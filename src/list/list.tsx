import * as React from 'react';
import * as classNames from 'classnames';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import {ListBase} from './base';
import {Clickable} from './clickable';
import {Static} from './static';
import {Selectable} from './selectable';
import "../css/va-list.css";
import Row from 'reactstrap/lib/Row';

export type StaticRow = string|JSX.Element|((items:any)=>string|JSX.Element);

export interface ListProps {
    className?: string|string[];
    items: any[];
    item: {
        className?: string|string[];
        render: (item:any, index:number) => JSX.Element;
        onSelect?: (item:any, isSelected:boolean, anySelected:boolean)=>void;
        onClick?: (item:any)=>void;
    };
    compare?:(item:any, selectItem)=>boolean;
    selectedItems?:any[];
    header?: StaticRow;
    footer?: StaticRow;
    before?: StaticRow;
    loading?: StaticRow;
    none?: StaticRow;
}

@observer
export class List extends React.Component<ListProps> {
    private listBase: ListBase;
    constructor(props:ListProps) {
        super(props);
        let {item} = this.props;
        let {onClick, onSelect} = item;
        if (onSelect !== undefined)
            this.listBase = new Selectable(this);
        else if (onClick !== undefined)
            this.listBase = new Clickable(this);
        else
            this.listBase = new Static(this);
    }
    get selectedItems():any[] {
        return this.listBase.selectedItems;
    }
    set selectedItems(value: any[]) {
        this.listBase.selectedItems = value;
    }
    render() {
        let {className, header, footer, before, loading, none, item, selectedItems} = this.props;
        if (before === undefined) before = 'before';
        if (loading === undefined) loading = 'loading';
        if (none === undefined) none = 'none';
        this.listBase.selectedItems = selectedItems;
        let items = this.listBase.items;
        function staticRow(row:StaticRow, type:string) {
            if (!row) return;
            return <li className={"va-list-"+type}>
                {typeof row === 'function'? row(items) : row}
            </li>;
        }
        let content:any;
        if (items === null)
            content = staticRow(before, 'before');
        else if (items === undefined)
            content = staticRow(loading, 'loading');
        else if (items.length === 0)
            content = staticRow(none, 'none');
        else 
            content = items.map((item, index) => this.listBase.render(item, index));
        console.log('list: %s', header);
        return <ul className={classNames('va-list', className)}>
            {staticRow(header, 'header')}
            {content}
            {staticRow(footer, 'footer')}
        </ul>;
    }
}
