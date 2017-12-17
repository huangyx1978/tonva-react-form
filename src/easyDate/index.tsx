import * as React from 'react';

export interface EasyDateProps {
    date: Date | string;
}

export class EasyDate extends React.Component<EasyDateProps> {
    render() {
        let {date} = this.props;
        let d = (typeof date === 'string')? new Date(Date.parse(date)) : date;
        return d.toLocaleDateString();
    }
}
