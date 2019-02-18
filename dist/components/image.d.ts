import * as React from 'react';
export interface ImageProps {
    src: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare class Image extends React.Component<ImageProps> {
    private src;
    componentWillMount(): Promise<void>;
    render(): JSX.Element;
}
