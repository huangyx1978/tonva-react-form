import * as React from 'react';
import {Control, ControlBase} from './control';
import {FormView} from '../formView';

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

export class EmptyControl extends ControlBase {
    private element:JSX.Element;
    constructor(formView:FormView, element:JSX.Element) {
        super(formView);
        this.element = element;
    }
    render():JSX.Element {
        return <div className="col-sm-10">
            <div className="form-control-static">
                {this.element}
            </div>
        </div>;
    }
}
