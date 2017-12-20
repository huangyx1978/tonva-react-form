import * as React from 'react';

export interface SearchBoxProps {
    className?: string;
    label?: string;
    placeholder?: string;
    buttonText?: string;
    maxLength?: number;
    onSearch: (key:string)=>void;
}

export interface SearchBoxState {
    disabled: boolean;
}

export class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    private input: HTMLInputElement;
    private key: string;

    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        }
        this.ref = this.ref.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(evt: React.ChangeEvent<any>) {
        this.key = evt.target.value;
        if (this.key !== undefined) {
            this.key = this.key.trim();
        }
        this.setState({disabled: !this.key});
    }
    ref(input: HTMLInputElement) {
        this.input = input;
    }
    onSubmit(event: React.FormEvent<any>) {
        event.preventDefault();
        if (!this.key) return;
        this.props.onSearch(this.key);
    }
    render() {
        let {className, label, placeholder, buttonText, maxLength} = this.props;
        let lab;
        if (label !== undefined) lab = <label className="input-group-addon">{label}</label>;
        return <form className={className} onSubmit={this.onSubmit} >
            <div className="input-group input-group-sm">
                {lab}
                <input onChange={this.onChange} 
                    type="text" 
                    name="key" 
                    className="form-control" 
                    placeholder={placeholder}
                    maxLength={maxLength} />
                <button className="input-group-addon" type="button" disabled={this.state.disabled}>
                    <i className='fa fa-search' />
                    <i className="fa"/>
                    {buttonText}
                </button>
            </div>
        </form>;
    }
}
