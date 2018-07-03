var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        this.key = this.props.initKey || '';
        if (input === null)
            return;
        input.value = this.key;
    }
    onSubmit(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            if (!this.key)
                return;
            if (this.input)
                this.input.disabled = true;
            yield this.props.onSearch(this.key);
            if (this.input)
                this.input.disabled = false;
        });
    }
    render() {
        let { className, label, placeholder, buttonText, maxLength } = this.props;
        let lab;
        if (label !== undefined)
            lab = React.createElement("label", { className: "input-group-addon" }, label);
        return React.createElement("form", { className: className, onSubmit: this.onSubmit },
            React.createElement("div", { className: "input-group input-group-sm" },
                lab,
                React.createElement("input", { onChange: this.onChange, type: "text", name: "key", ref: this.ref, className: "form-control", placeholder: placeholder, maxLength: maxLength }),
                React.createElement("button", { className: "input-group-addon", type: "submit", disabled: this.state.disabled },
                    React.createElement("i", { className: 'fa fa-search' }),
                    React.createElement("i", { className: "fa" }),
                    buttonText)));
    }
}
//# sourceMappingURL=searchBox.js.map