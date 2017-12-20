import * as React from 'react';
import {observer} from 'mobx-react';
import {Prop, PropView} from './propView';
import {PropContainer, PropBorder, PropGap} from './row';

export interface PropGridProps {
    rows: Prop[];
    values: any;
}

@observer
export class PropGrid extends React.Component<PropGridProps> {
    private propView: PropView;
    constructor(props:PropGridProps) {
        super(props);
        this.propView = new PropView(this.props.rows, this.props.values);
    }

    render() {
        return <div className="container bg-white">
            {this.propView.render()}
        </div>;
    }
}
