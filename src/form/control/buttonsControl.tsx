import * as React from 'react';
import {observable} from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import {FormView} from '../formView';
import {Field} from '../field';
import {Face} from '../face';
import {ControlBase} from './control';

export class ButtonsControl extends ControlBase {
    constructor(props) {
        super(props);
        this.otherClick = this.otherClick.bind(this);
    }
    private otherClick() {
        let onOther = this.formView.props.onOther;
        if (onOther === undefined) return;
        let values = this.formView.readValues();
        onOther(values);
    }
    renderControl():JSX.Element {
        let {nothing, hasError, props} = this.formView;
        let {submitButton, otherButton, onOther} = props;
        let btnOther;
        if (otherButton !== undefined) {
            btnOther = <button className="btn btn-outline-info ml-auto" onClick={this.otherClick}>
                {otherButton}
            </button>
        }
        return <div className="d-flex justify-content-start">
            <button
                className="btn btn-primary"
                type="submit" 
                //disabled={nothing || hasError}
                >
                {submitButton || '提交'}
            </button>
            {btnOther}
        </div>;
    }
}
