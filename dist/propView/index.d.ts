/// <reference types="react" />
import * as React from 'react';
export interface PropViewProps {
    icon: string;
    main: string | JSX.Element;
    discription: string | JSX.Element;
}
export declare class PropView extends React.Component<PropViewProps> {
    render(): JSX.Element;
}
