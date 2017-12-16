import * as React from 'react';
import {observable} from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import {FormView} from '../formView';
import {Field} from '../field';
import {Face, CheckBoxFace} from '../face';
import {Control} from './control';

export class CheckControl extends Control {
    protected face: CheckBoxFace;

    render():JSX.Element {
        return <div className="col-sm-10">
            <div className="form-control-static">
            <label className="form-control">
                <label className="custom-control custom-checkbox mb-0">
                    <input type='checkbox'
                        name={this.field.name} 
                        className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">{this.face.label}</span>
                </label>
                </label>
            </div>
        </div>;
    }
}
