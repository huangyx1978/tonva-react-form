import * as React from 'react';
import {Control} from './control';

export class UnknownControl extends Control {
    render():JSX.Element {
        return <div className="col-sm-10">
            <div className="form-control-static">
                <div className="alert alert-primary" role="alert">
                don't know how to create control<br/>
                field: {JSON.stringify(this.field)}<br/>
                face: {JSON.stringify(this.face)}<br/>
                </div>
            </div>
        </div>;
    }
}
