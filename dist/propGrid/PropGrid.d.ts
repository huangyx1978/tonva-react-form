/// <reference types="react" />
import * as React from 'react';
export interface PropGridProps {
    icon: string;
    main: string | JSX.Element;
    discription: string | JSX.Element;
}
export declare class PropGrid extends React.Component<PropGridProps> {
    render(): JSX.Element;
}
