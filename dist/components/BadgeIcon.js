import * as React from 'react';
import * as classNames from 'classnames';
import '../css/va-badge-icon.css';
export class BadgeIcon extends React.Component {
    render() {
        let { className, icon, badge, size, color, badgeAlign, badgeVertical } = this.props;
        let cn = classNames(className, 'va-badge', size && 'va-badge-' + size, 'va-badge-' + (color || 'secondary'), badgeAlign && 'va-badg-' + badgeAlign, badgeVertical && 'va-badg-' + badgeVertical);
        //"va-badge va-badge-success va-badge-lg va-badge-right va-badge-top"
        return React.createElement("div", { className: cn },
            React.createElement("img", { src: icon }),
            React.createElement("i", null, badge));
    }
}
//# sourceMappingURL=BadgeIcon.js.map