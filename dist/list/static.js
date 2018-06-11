import * as React from 'react';
import * as classNames from 'classnames';
import { ListBase } from './base';
export class Static extends ListBase {
    render(item, index) {
        let { className, key, render } = this.list.props.item;
        return React.createElement("li", { key: key === undefined ? index : key(item), className: classNames(className) }, this.renderContent(item, index));
    }
}
//# sourceMappingURL=static.js.map