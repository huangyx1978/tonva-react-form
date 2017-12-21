import * as React from 'react';
import * as classNames from 'classnames';
import '../css/va-badge-icon.css';

export interface BadgeIconProps {
    className?: string;
    icon: string;
    badge?: string|number;
    size?: 'sm'|'lg';
    color?: 'secondary'|'success'|'danger'|'primary'|'info'|'warning';
    badgeAlign?: 'left'|'center'|'right';
    badgeVertical?: 'top'|'middle'|'bottom';
}

export class BadgeIcon extends React.Component<BadgeIconProps> {
    render() {
        let {className, icon, badge, size, color, badgeAlign, badgeVertical} = this.props;
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
            <img src={icon} />
            <i>{badge}</i>
        </div>;
    }
}
