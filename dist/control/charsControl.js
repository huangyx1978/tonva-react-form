var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { observable, computed } from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import { Control } from './control';
const TxtRequired = '必须填入要求内容';
export class CharsControl extends Control {
    init() {
        super.init();
        if (this.field.required === true) {
            this.rules.push((v) => {
                if (v === undefined)
                    return TxtRequired;
                return true;
            });
        }
    }
    get hasError() { return this.error !== undefined; }
    setProps() {
        super.setProps();
        _.assign(this.props, {
            onBlur: this.onBlur.bind(this),
            onFocus: this.onFocus.bind(this),
        });
        let face = this.face;
        if (face !== undefined) {
            _.assign(this.props, {
                placeholder: face.placeholder,
            });
        }
        return this.props;
    }
    ;
    parseValue(value) { return value; }
    onBlur() {
        try {
            let v = this.parseValue(this.element.value);
            if (this.rules.length > 0) {
                let isOk;
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
    onFocus() {
        this.error = undefined;
        this.formView.clearErrors();
    }
    className() {
        return classNames({
            "form-control": true,
            "has-success": this.isOK === true,
            "is-invalid": this.error !== undefined,
            "is-valid": this.error === undefined && this.isOK === true,
        });
    }
    renderInput() {
        return React.createElement("input", Object.assign({ className: this.className() }, this.props));
    }
    renderError() {
        if (this.error === undefined)
            return null;
        return React.createElement("div", { className: "invalid-feedback" }, this.error);
    }
    setError(fieldName, error) {
        if (this.field.name === fieldName)
            this.error = error;
    }
    setInitValues(values) {
        let v = values[this.field.name];
        if (v === undefined)
            return;
        this.element.value = v;
        this.value = v;
    }
    render() {
        return React.createElement("div", { className: "col-sm-10" },
            this.renderInput(),
            this.renderError());
    }
}
__decorate([
    observable
], CharsControl.prototype, "isOK", void 0);
__decorate([
    observable
], CharsControl.prototype, "error", void 0);
__decorate([
    computed
], CharsControl.prototype, "hasError", null);
//# sourceMappingURL=charsControl.js.map