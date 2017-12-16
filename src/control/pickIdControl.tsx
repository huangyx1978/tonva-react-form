import * as React from 'react';
import {observable} from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import {FormView} from '../formView';
import {Field} from '../field';
import {Face, IdPickFace} from '../face';
import {Control} from './control';

export class PickIdControl extends Control {
    protected face: IdPickFace;
    protected value: number;
    @observable private element: string|JSX.Element;
    constructor(formView:FormView, field:Field, face:Face) {
        super(formView, field, face);
        this.onClick = this.onClick.bind(this);
    }

    private async onClick() {
        let ret = await this.face.pick(this.face);
        this.value = ret.id;
        this.element = ret.element;
    }
    render():JSX.Element {
        return <div className="col-sm-10">
            <div className="form-control-static ">
                <button className="form-control btn btn-outline-info"
                    type="button"
                    style={{textAlign:'left', paddingLeft:'0.75rem'}}
                    onClick={this.onClick}>
                    {this.value === undefined? this.face.text || '请选择Id' : this.element}
                </button>
            </div>
        </div>;
    }
}
