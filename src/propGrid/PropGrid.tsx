import * as React from 'react';
import {observer} from 'mobx-react';
import {Prop, PropView} from './propView';
import {PropContainer, PropBorder, PropGap} from './row';

export interface PropGridProps {
    rows: Prop[];
    values: any;
    alignValue?: 'left'|'center'|'right';
}

@observer
export class PropGrid extends React.Component<PropGridProps> {
/*
    private propView: PropView;
    constructor(props:PropGridProps) {
        super(props);
    }
*/
/*
    componentWillMount() {
        this.propView = new PropView(this.props.rows);
        this.propView.setValues(this.props.values);
    }

    componentWillReceiveProps(nextProps: Readonly<PropGridProps>, nextContext: any) {
        this.propView = new PropView(this.props.rows);
        this.propView.setValues(nextProps.values);
        this.forceUpdate();
    }
*/
    render() {
        let propView = new PropView(this.props, this.props.rows);
        propView.setValues(this.props.values);
        return <div className="container">
            {propView.render()}
        </div>;
    }
}
