/// <reference types="react" />
import * as React from 'react';
import { Prop } from './propView';
export interface PropGridProps {
    rows: Prop[];
    values: any;
}
export declare class PropGrid extends React.Component<PropGridProps> {
    render(): JSX.Element;
}
