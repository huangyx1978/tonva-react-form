import * as React from 'react';
import * as classNames from 'classnames';
export class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = (evt) => {
            this.key = evt.target.value;
            if (this.key !== undefined) {
                this.key = this.key.trim();
            }
            this.setState({ disabled: !this.key });
        };
        this.ref = (input) => {
            this.input = input;
            this.key = this.props.initKey || '';
            if (input === null)
                return;
            input.value = this.key;
        };
        this.onSubmit = async (evt) => {
            evt.preventDefault();
            if (!this.key)
                return;
            if (this.input)
                this.input.disabled = true;
            await this.props.onSearch(this.key);
            if (this.input)
                this.input.disabled = false;
        };
        this.state = {
            disabled: false,
        };
    }
    render() {
        let { className, label, placeholder, buttonText, maxLength, size } = this.props;
        let inputSize;
        switch (size) {
            default:
            case 'sm':
                inputSize = 'input-group-sm';
                break;
            case 'md':
                inputSize = 'input-group-md';
                break;
            case 'lg':
                inputSize = 'input-group-lg';
                break;
        }
        let lab;
        if (label !== undefined)
            lab = React.createElement("label", { className: "input-group-addon" }, label);
        return React.createElement("form", { className: className, onSubmit: this.onSubmit },
            React.createElement("div", { className: classNames("input-group", inputSize) },
                lab,
                React.createElement("input", { onChange: this.onChange, type: "text", name: "key", ref: this.ref, className: "form-control", placeholder: placeholder, maxLength: maxLength }),
                React.createElement("div", { className: "input-group-append" },
                    React.createElement("button", { className: "btn btn-primary", type: "submit", disabled: this.state.disabled },
                        React.createElement("i", { className: 'fa fa-search' }),
                        React.createElement("i", { className: "fa" }),
                        buttonText))));
    }
}
//# sourceMappingURL=searchBox.js.map