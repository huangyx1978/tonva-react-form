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
    @observable private caption: string|JSX.Element;
    constructor(formView:FormView, field:Field, face:Face) {
        super(formView, field, face);
        this.onClick = this.onClick.bind(this);
    }

    private async onClick() {
        let {pick, fromItem} = this.face;
        let item = await pick(this.face);
        let {id, caption} = fromItem(item);
        this.value = id;
        this.caption = caption || String(id);
    }
    render():JSX.Element {
        return <div className="col-sm-10">
            <div className="form-control-static ">
                <button className="form-control btn btn-outline-info"
                    type="button"
                    style={{textAlign:'left', paddingLeft:'0.75rem'}}
                    onClick={this.onClick}>
                    {this.value === undefined? this.face.initCaption || '请选择Id' : this.caption}
                </button>
            </div>
        </div>;
    }
}
