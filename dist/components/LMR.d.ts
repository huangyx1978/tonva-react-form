/// <reference types="react" />
import * as React from 'react';
import '../css/va-lmr.css';
export interface LMRProps {
    className?: string | string[];
    left?: JSX.Element;
    right?: JSX.Element;
}
export declare class LMR extends React.Component<LMRProps> {
    render(): JSX.Element;
}
