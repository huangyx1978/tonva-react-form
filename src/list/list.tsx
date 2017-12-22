import * as React from 'react';
import * as classNames from 'classnames';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import {StaticRow, ListProps} from './listProps';
import {ListBase} from './base';
import {Clickable} from './clickable';
import {Static} from './static';
import {Selectable} from './selectable';
import "../css/va-list.css";

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
    render() {
        let {className, header, footer, loading, none, item} = this.props;
        let items = this.listBase.items;
        function staticRow(row:StaticRow, type:string) {
            if (row === undefined) return;
            return <li className={"va-list-"+type}>{
                typeof row === 'function'? row(items) : row
            }</li>
        }
        let content:any;
        if (items === undefined)
            content = staticRow(loading, 'loading');
        else if (items.length === 0)
            content = staticRow(none, 'none');
        else 
            content = items.map((item, index) => this.listBase.render(item, index));
        return <ul className={classNames('va-list', className)}>
            {staticRow(header, 'header')}
            {content}
            {staticRow(footer, 'footer')}
        </ul>;
    }
}
