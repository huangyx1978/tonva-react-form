import * as React from 'react';
import * as classNames from 'classnames';
import '../css/va-lmr.css';
export class LMR extends React.Component {
    render() {
        let { className, left, children, right } = this.props;
        let l, r;
        if (left !== undefined)
            l = React.createElement("header", null, left);
        if (right !== undefined)
            r = React.createElement("footer", null, right);
        return React.createElement("div", { className: classNames('va-lmr', className) },
            l,
            React.createElement("div", null, children),
            r);
    }
}
//# sourceMappingURL=LMR.js.map