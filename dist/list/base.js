import * as React from 'react';
import * as classNames from 'classnames';
export class ListBase {
    constructor(list, props) {
        this.list = list;
        this.props = props;
    }
    get items() { return this.props.items; }
    renderContent(item, index) {
        let { contentClass, render } = this.props.item;
        return React.createElement("div", { className: classNames(contentClass) }, render(item, index));
    }
}
//# sourceMappingURL=base.js.map