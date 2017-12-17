import * as React from 'react';

export interface PropGridProps {
    icon: string;
    main: string|JSX.Element;
    discription: string | JSX.Element;
}

export class PropGrid extends React.Component<PropGridProps> {
    render() {
        let {icon, main, discription} = this.props;
        let disp;
        if (typeof discription === 'string')
            disp = <p>{discription}</p>;
        else
            disp = discription;
        return <div>
            PropGrid
        </div>;
    }
}
