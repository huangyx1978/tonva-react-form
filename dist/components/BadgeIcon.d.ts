/// <reference types="react" />
import * as React from 'react';
import '../css/va-badge-icon.css';
export interface BadgeIconProps {
    className?: string;
    icon: string;
    badge?: string | number;
    size?: 'sm' | 'lg';
    color?: 'secondary' | 'success' | 'danger' | 'primary' | 'info' | 'warning';
    badgeAlign?: 'left' | 'center' | 'right';
    badgeVertical?: 'top' | 'middle' | 'bottom';
}
export declare class BadgeIcon extends React.Component<BadgeIconProps> {
    render(): JSX.Element;
}
