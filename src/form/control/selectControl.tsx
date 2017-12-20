import * as React from 'react';
import {observable} from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import {FormView} from '../formView';
import {Field} from '../field';
import {Face, SelectFace} from '../face';
import {Control} from './control';

export class SelectControl extends Control {
    protected face: SelectFace;
    render():JSX.Element {
        return <div className="col-sm-10">
            <div className="form-control-static">
                <select name={this.field.name} className="form-control">
                    {this.face.list.map((item, index) => {
                        let t, v;
                        if (typeof item !== 'object') t = v = item;
                        else {
                            t = item.text;
                            v = item.value;
                        }
                        return <option key={index} value={v}>{t}</option>;
                    })}
                </select>
            </div>
        </div>;
    }
}
