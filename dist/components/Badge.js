import * as React from 'react';
import * as classNames from 'classnames';
import '../css/va-badge.css';
export class Badge extends React.Component {
    render() {
        let { className, badge, size, color, badgeAlign, badgeVertical, children } = this.props;
        let cn = classNames(className, 'va-badge', size && 'va-badge-' + size, 'va-badge-' + (color || 'secondary'), badgeAlign && 'va-badg-' + badgeAlign, badgeVertical && 'va-badg-' + badgeVertical);
        //"va-badge va-badge-success va-badge-lg va-badge-right va-badge-top"
        return React.createElement("div", { className: cn },
            children,
            React.createElement("b", null, badge));
    }
}
//# sourceMappingURL=Badge.js.map