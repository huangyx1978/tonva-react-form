import * as React from 'react';
import * as classNames from 'classnames';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export class DropdownActions extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        let { icon, actions, isRight } = this.props;
        if (isRight === undefined)
            isRight = true;
        let hasIcon = actions.some(v => v.icon !== undefined);
        return React.createElement(ButtonDropdown, { isOpen: this.state.dropdownOpen, toggle: this.toggle, size: "sm" },
            React.createElement(DropdownToggle, { caret: true, size: "sm", className: "cursor-pointer" },
                React.createElement("i", { className: classNames('fa', 'fa-' + (icon || 'ellipsis-v')) })),
            React.createElement(DropdownMenu, { right: isRight }, actions.map((v, index) => {
                let { icon, caption, action } = v;
                if (icon === undefined && caption === undefined)
                    return React.createElement("div", { className: "dropdown-divider" });
                let i;
                if (hasIcon === true) {
                    if (icon !== undefined)
                        icon = 'fa-' + icon;
                    i = React.createElement(React.Fragment, null,
                        React.createElement("i", { className: classNames('fa', icon, 'fa-fw'), "aria-hidden": true }),
                        "\u00A0 ");
                }
                if (action === undefined)
                    return React.createElement("h6", { className: "dropdown-header" },
                        i,
                        " ",
                        caption);
                return React.createElement(DropdownItem, { key: index, onClick: action },
                    i,
                    " ",
                    caption);
            })));
    }
}
//# sourceMappingURL=index.js.map