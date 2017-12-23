import * as React from 'react';
export class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        };
        this.ref = this.ref.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(evt) {
        this.key = evt.target.value;
        if (this.key !== undefined) {
            this.key = this.key.trim();
        }
        this.setState({ disabled: !this.key });
    }
    ref(input) {
        this.input = input;
    }
    onSubmit(event) {
        event.preventDefault();
        if (!this.key)
            return;
        this.props.onSearch(this.key);
    }
    render() {
        let { className, label, placeholder, buttonText, maxLength } = this.props;
        let lab;
        if (label !== undefined)
            lab = React.createElement("label", { className: "input-group-addon" }, label);
        return React.createElement("form", { className: className, onSubmit: this.onSubmit },
            React.createElement("div", { className: "input-group input-group-sm" },
                lab,
                React.createElement("input", { onChange: this.onChange, type: "text", name: "key", className: "form-control", placeholder: placeholder, maxLength: maxLength }),
                React.createElement("button", { className: "input-group-addon", type: "submit", disabled: this.state.disabled },
                    React.createElement("i", { className: 'fa fa-search' }),
                    React.createElement("i", { className: "fa" }),
                    buttonText)));
    }
}
//# sourceMappingURL=searchBox.js.map