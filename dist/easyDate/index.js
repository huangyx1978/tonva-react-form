import * as React from 'react';
export class EasyDate extends React.Component {
    render() {
        let { date } = this.props;
        if (date === undefined)
            return null;
        let d = (typeof date === 'string') ? new Date(Date.parse(date)) : date;
        let now = new Date();
        let tick = now.getTime() - d.getTime();
        let nDate = now.getDate();
        let _date = d.getDate(), hour = d.getHours(), minute = d.getMinutes(), month = d.getMonth();
        let hm = hour + ':' + minute;
        if (tick < 24 * 3600 * 1000) {
            return _date !== nDate ? '昨天 ' + hm : hm;
        }
        if (tick < 365 * 24 * 3600 * 1000) {
            return (month + 1) + '月' + (_date + 1) + '日 ' + hm;
        }
        return d.getFullYear() + '年' + (month + 1) + '月' + (_date + 1) + '日 ' + hm;
    }
}
//# sourceMappingURL=index.js.map