import * as React from 'react';
export interface Action {
    icon?: string;
    caption?: string;
    action?: () => void;
}
export interface DropdownActionsProps {
    icon?: string;
    actions: Action[];
    isRight?: boolean;
}
export interface DropdownActionsState {
    dropdownOpen: boolean;
}
export declare class DropdownActions extends React.Component<DropdownActionsProps, DropdownActionsState> {
    constructor(props: any);
    toggle(): void;
    render(): JSX.Element;
}
