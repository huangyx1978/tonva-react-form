import * as React from 'react';
export interface SearchBoxProps {
    className?: string;
    label?: string;
    initKey?: string;
    placeholder?: string;
    buttonText?: string;
    maxLength?: number;
    onSearch: (key: string) => Promise<void>;
}
export interface SearchBoxState {
    disabled: boolean;
}
export declare class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    private input;
    private key;
    constructor(props: any);
    onChange(evt: React.ChangeEvent<any>): void;
    ref(input: HTMLInputElement): void;
    onSubmit(event: React.FormEvent<any>): Promise<void>;
    render(): JSX.Element;
}
