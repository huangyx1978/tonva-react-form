import * as React from 'react';
export class EasyDate extends React.Component {
    render() {
        let { date } = this.props;
        if (date === undefined)
            return null;
        let d = (typeof date === 'string') ? new Date(Date.parse(date)) : date;
        return d.toLocaleDateString();
    }
}
//# sourceMappingURL=index.js.map