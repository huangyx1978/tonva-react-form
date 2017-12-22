import * as React from 'react';
import * as classNames from 'classnames';
import {ListBase} from './base';

export class Static extends ListBase {
    render(item:any, index:number):JSX.Element {
        let {className, render} = this.list.props.item;
        return <li key={index} className={classNames(className)}>
            {this.renderContent(item, index)}
        </li>
    }
}
