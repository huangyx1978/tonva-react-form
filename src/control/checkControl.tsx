import * as React from 'react';
import {observable} from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import {FormView} from '../formView';
import {Field} from '../field';
import {Face, CheckBoxFace} from '../face';
import {Control} from './control';

export class CheckControl extends Control {
    protected element: HTMLInputElement;
    protected face: CheckBoxFace;

    setProps() {
        super.setProps();
        _.assign(this.props, {
            onChange: this.onChange.bind(this),
        });
    }

    setInitValues(values: any) {
        let v = values[this.field.name];
        if (v === undefined) {
            v = this.field.defaultValue;
        }
        if (v !== undefined) {
            this.element.checked = v !== 0;
            this.value = v;
        }
    }

    private onChange() {
        this.value = this.element.checked? 1:0;
    }

    render():JSX.Element {
        return <div className="col-sm-10">
            <div className="form-control-static">
            <label className="form-control">
                <label className="custom-control custom-checkbox mb-0">
                    <input type='checkbox'
                        name={this.field.name}
                        ref={this.props.ref}
                        onChange={this.props.onChange}
                        className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    <span className="custom-control-description">{this.face.label}</span>
                </label>
                </label>
            </div>
        </div>;
    }
}
