import * as React from 'react';
import {observable} from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import {FormView} from '../formView';
import {Field} from '../field';
import {Face} from '../face';
import {ControlBase} from './control';

export class ButtonsControl extends ControlBase {
    render():JSX.Element {
        return <div className="col-sm-10">
            <div className="form-control-static">
                <button
                    className="btn btn-primary"
                    type="submit" 
                    disabled={this.formView.nothing || this.formView.hasError}>
                    {this.formView.props.submitButton || '提交'}
                </button>
            </div>
        </div>;
    }
}
