import * as React from 'react';
import {observable, computed} from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import {FormView} from '../formView';
import {Field} from '../field';
import {Face, Placeholder} from '../face';
import {Control} from './control';

const TxtRequired = '必须填入要求内容';

export abstract class CharsControl extends Control {
    protected init() {
        super.init();
        if (this.field.required === true) {
            this.rules.push((v) => {
                if (v===undefined) return TxtRequired;
                return true;                
            });
        }
    }

    protected element: HTMLInputElement;
    protected getValueFromElement():any {return this.parseValue(this.element.value)}

    protected setProps() {
        super.setProps();
        _.assign(this.props, {
            onBlur: this.onBlur.bind(this),
            onFocus: this.onFocus.bind(this),
        });
        let face = this.face as Placeholder;
        if (face !== undefined) {
            _.assign(this.props, {
                placeholder: face.placeholder,
            });
        }
        return this.props;
    };
    protected parseValue(value?:string):any {return value;}
    private onBlur() {
        this.validate();
    }
    private onFocus() {
        this.error = undefined;
        this.formView.clearErrors();
    }
    protected className() {
        return classNames({
            "form-control": true,
            "has-success": this.isOK === true,
            "is-invalid": this.error !== undefined,
            "is-valid": this.error === undefined && this.isOK === true,
        });
    }
    protected renderInput():JSX.Element {
        return <input className={this.className()} {...this.props} />;
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
