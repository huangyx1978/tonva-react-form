import * as React from 'react';
export class PropGrid extends React.Component {
    render() {
        let { icon, main, discription } = this.props;
        let disp;
        if (typeof discription === 'string')
            disp = React.createElement("p", null, discription);
        else
            disp = discription;
        return React.createElement("div", null, "PropGrid");
    }
}
//# sourceMappingURL=PropGrid.js.map