import * as React from 'react';
import {observable, computed} from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import {FormView} from '../formView';
import {Field} from '../field';
import {Face, InputFace} from '../face';
import {Control} from './control';

const TxtRequired = '必须填入要求内容';

export abstract class CharsControl extends Control {
    protected init() {
        super.init();
        this.ref = this.ref.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        if (this.field.required === true) {
            this.rules.push((v) => {
                if (v===undefined) return TxtRequired;
                return true;                
            });
        }
    }

    protected inputType: string;
    protected element: HTMLInputElement;
    @observable protected isOK?: boolean;
    @observable protected error: string;

    @computed get hasError():boolean {return this.error !== undefined;}

    protected setProps() {
        super.setProps();
        _.assign(this.props, {
            type: this.inputType,
            ref: this.ref,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
        });
        let face = this.face as InputFace;
        if (face !== undefined) {
            _.assign(this.props, {
                placeholder: face.placeholder,
            });
        }
        return this.props;
    };
    private ref(element: HTMLInputElement) {
        this.element = element;
    }
    protected parseValue(value?:string):any {return value;}
    private onBlur() {
        try {
            let v = this.parseValue(this.element.value);
            if (this.rules.length > 0) {
                let isOk:boolean;
                for (let rule of this.rules) {
                    let err = rule(v);
                    if (err === true) {
                        isOk = true;
                    }
                    else if (err !== undefined) {
                        this.error = err;
                        return;
                    }
                }
                this.isOK = isOk;
            }
            this.value = v;
        }
        catch (e) {
            this.error = e.message;
        }
    }
    private onFocus() {
        this.error = undefined;
        this.formView.clearErrors();
    }
    protected renderInput():JSX.Element {
        let cn = classNames({
            "form-control": true,
            "has-success": this.isOK === true,
            "is-invalid": this.error !== undefined,
            "is-valid": this.error === undefined && this.isOK === true,
        });
        return <input className={cn} {...this.props} />;
    }
    protected renderError():JSX.Element {
        if (this.error === undefined) return null;
        return <div className="invalid-feedback">{this.error}</div>
    }
    setError(fieldName:string, error:string) {
        if (this.field.name === fieldName) this.error = error;
    }
    setInitValues(values: any) {
        let v = values[this.field.name];
        if (v === undefined) return;
        this.element.value = v;
        this.value = v;
    }
    render():JSX.Element {
        return <div className="col-sm-10">
            {this.renderInput()}
            {this.renderError()}
        </div>;
    }
}
