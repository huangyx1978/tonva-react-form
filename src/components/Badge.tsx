import * as React from 'react';
import {observer} from 'mobx-react';
import * as classNames from 'classnames';
import '../css/va-badge.css';

export interface BadgeProps {
    className?: string;
    badge?: string|number;
    size?: 'sm'|'lg';
    color?: 'secondary'|'success'|'danger'|'primary'|'info'|'warning';
    badgeAlign?: 'left'|'center'|'right';
    badgeVertical?: 'top'|'middle'|'bottom';
}

@observer
export class Badge extends React.Component<BadgeProps> {
    render() {
        let {className, badge, size, color, badgeAlign, badgeVertical, children} = this.props;
        let cn = classNames(
            className,
            'va-badge',
            size && 'va-badge-'+size,
            'va-badge-' + (color||'secondary'),
            badgeAlign && 'va-badg-'+badgeAlign,
            badgeVertical && 'va-badg-'+badgeVertical,
        );
        //"va-badge va-badge-success va-badge-lg va-badge-right va-badge-top"
        return <div className={cn}>
            {children}
            {badge && <b>{badge}</b>}
        </div>;
    }
}
