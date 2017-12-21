import * as React from 'react';
import * as classNames from 'classnames';
import '../css/va-lmr.css';

export interface LMRProps {
    className?: string | string[];
    left?: JSX.Element;
    right?: JSX.Element;
}

export class LMR extends React.Component<LMRProps> {
    render() {
        let {className, left, children, right} = this.props;
        let l, r;
        if (left !== undefined) l = <header>{left}</header>;
        if (right !== undefined) r = <footer>{right}</footer>;
        return <div className={classNames('va-lmr', className)}>
            {l}
            <div>{children}</div>
            {r}
        </div>;
    }
}
