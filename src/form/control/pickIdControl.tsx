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
    // protected value: number;
    @observable private caption: string|JSX.Element;
    constructor(formView:FormView, field:Field, face:Face) {
        super(formView, field, face);
        this.onPicked = this.onPicked.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    private async onClick() {
        let {pick, fromPicked} = this.face;
        let item = await pick(this.face, this.formView.props, this.formView.readValues());
        if (item === undefined) {
            this.value = undefined;
            return;
        }
        if (fromPicked === undefined) {
            this.value = item.id;
            return;
        }
        let {id, caption} = fromPicked(item);
        this.value = id;
        this.caption = caption;
    }
    onPicked(value: any) {
        this.value = value.id;
    }
    async setInitValues(values: any) {
        let v = values[this.field.name];
        this.value = v;
    }
    private buildContent():string|JSX.Element {
        let {tuid, input} = this.face;
        return <input.component id={this.value} 
            tuid={tuid}
            input={input}
            entitiesUI={this.formView.props.context} 
            params={this.formView.readValues()}
            onPicked={this.onPicked} />;

        /*
        let {itemFromId, fromPicked, initCaption} = this.face;
        if (this.value === undefined) {
            return initCaption || '请选择Id';
        }
        if (this.caption !== undefined) {
            return this.caption;
        }
        if (itemFromId !== undefined) {
            if (fromPicked !== undefined) {
                let item = itemFromId(this.value);
                if (item) {
                    let ret = fromPicked(item);
                    if (ret !== undefined) return ret.caption;
                }
            }
        }
        return String(this.value);
        */
    }
    renderControl():JSX.Element {
        return <div className="form-control-static ">
            {this.buildContent()}
        </div>;
    }
}
/*
<button className="form-control btn btn-outline-info"
type="button"
style={{textAlign:'left', paddingLeft:'0.75rem'}}
onClick={this.onClick}>
{this.buildContent()}
</button>
*/