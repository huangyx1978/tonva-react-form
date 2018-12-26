var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import * as classNames from 'classnames';
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledButtonDropdown } from 'reactstrap';
var DropdownActions = /** @class */ (function (_super) {
    __extends(DropdownActions, _super);
    function DropdownActions(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () {
            _this.setState({
                dropdownOpen: !_this.state.dropdownOpen
            });
        };
        _this.state = {
            dropdownOpen: false
        };
        return _this;
    }
    DropdownActions.prototype.render = function () {
        var _a = this.props, icon = _a.icon, actions = _a.actions, isRight = _a.isRight;
        if (isRight === undefined)
            isRight = true;
        var hasIcon = actions.some(function (v) { return v.icon !== undefined; });
        return React.createElement(UncontrolledButtonDropdown, { isOpen: this.state.dropdownOpen, toggle: this.toggle },
            React.createElement(DropdownToggle, { caret: true, size: "sm", className: "cursor-pointer" },
                React.createElement("i", { className: classNames('fa', 'fa-' + (icon || 'ellipsis-v')) })),
            React.createElement(DropdownMenu, { right: isRight }, actions.map(function (v, index) {
                var icon = v.icon, caption = v.caption, action = v.action;
                if (icon === undefined && caption === undefined)
                    return React.createElement("div", { className: "dropdown-divider" });
                var i;
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
    };
    return DropdownActions;
}(React.Component));
export { DropdownActions };
//# sourceMappingURL=index.js.map