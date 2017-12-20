import * as React from 'react';
const imgStyle = {
    width: '4rem',
    height: '4rem',
};
export class PropHeader extends React.Component {
    render() {
        let { icon, main, discription } = this.props;
        let disp;
        if (typeof discription === 'string')
            disp = React.createElement("p", null, discription);
        else
            disp = discription;
        return React.createElement("div", { className: "media" },
            React.createElement("img", { className: "d-flex mr-3", src: icon, alt: "img", style: imgStyle }),
            React.createElement("div", { className: "media-body" },
                React.createElement("h5", { className: "mt-0" }, main),
                disp));
    }
}
//# sourceMappingURL=index.js.map