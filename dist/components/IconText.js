import * as React from 'react';
import { FA } from './FA';
export class IconText extends React.Component {
    render() {
        let { icon, iconClass, text, textClass } = this.props;
        return React.createElement("div", { className: "py-2" },
            React.createElement(FA, { className: iconClass, name: icon, size: "lg", fixWidth: true }),
            React.createElement(FA, { fixWidth: true, name: "" }),
            React.createElement("span", { className: textClass }, text));
    }
}
//# sourceMappingURL=IconText.js.map