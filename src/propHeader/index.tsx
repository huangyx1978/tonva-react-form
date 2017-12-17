import * as React from 'react';

export interface PropHeaderProps {
    icon: string;
    main: string|JSX.Element;
    discription: string | JSX.Element;
}

const imgStyle = {
    width: '4rem',
    height: '4rem',
};

export class PropHeader extends React.Component<PropHeaderProps> {
    render() {
        let {icon, main, discription} = this.props;
        let disp;
        if (typeof discription === 'string')
            disp = <p>{discription}</p>;
        else
            disp = discription;
        return <div className="media">
            <img className="d-flex mr-3" src={icon} alt="img" style={imgStyle} />
            <div className="media-body">
                <h5 className="mt-0">{main}</h5>
                {disp}
            </div>
        </div>
    }
}
