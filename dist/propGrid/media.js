import * as React from 'react';
const imgStyle = {
    width: '4rem',
    height: '4rem',
};
export class Media extends React.Component {
    render() {
        let { icon, main, discription } = this.props;
        let disp;
        if (typeof discription === 'string')
            disp = React.createElement("p", null, discription);
        else
            disp = discription;
        let img = icon;
        if (typeof icon === 'string')
            img = React.createElement("img", { className: "d-flex mr-3", src: icon, alt: "img", style: imgStyle });
        return React.createElement("div", { className: "media" },
            img,
            React.createElement("div", { className: "media-body" },
                React.createElement("h5", { className: "mt-0" }, main),
                disp));
    }
}
//# sourceMappingURL=media.js.map