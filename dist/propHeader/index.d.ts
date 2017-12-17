/// <reference types="react" />
import * as React from 'react';
export interface PropHeaderProps {
    icon: string;
    main: string | JSX.Element;
    discription: string | JSX.Element;
}
export declare class PropHeader extends React.Component<PropHeaderProps> {
    render(): JSX.Element;
}
