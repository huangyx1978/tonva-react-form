/// <reference types="react" />
import * as React from 'react';
import { Prop } from './propView';
export interface PropGridProps {
    className?: string;
    rows: Prop[];
    values: any;
    alignValue?: 'left' | 'center' | 'right';
}
export declare class PropGrid extends React.Component<PropGridProps> {
    render(): JSX.Element;
}
