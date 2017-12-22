import * as React from 'react';
import * as classNames from 'classnames';
import { ListBase } from './base';
export class Clickable extends ListBase {
    render(item, index) {
        let { className, render, onClick } = this.list.props.item;
        return React.createElement("li", { key: index, className: classNames('va-row-clickable', className), onClick: () => onClick(item) }, this.renderContent(item, index));
    }
}
//# sourceMappingURL=clickable.js.map