var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { observable } from 'mobx';
import { Control } from './control';
export class PickIdControl extends Control {
    constructor(formView, field, face) {
        super(formView, field, face);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        return __awaiter(this, void 0, void 0, function* () {
            let { pick, fromPicked } = this.face;
            let item = yield pick(this.face, this.formView.readValues());
            if (item === undefined) {
                this.value = undefined;
                return;
            }
            if (fromPicked === undefined) {
                this.value = item.id;
                return;
            }
            let { id, caption } = fromPicked(item);
            this.value = id;
            this.caption = caption;
        });
    }
    setInitValues(values) {
        return __awaiter(this, void 0, void 0, function* () {
            let v = values[this.field.name];
            this.value = v;
        });
    }
    buildCaption() {
        let { itemFromId, fromPicked, initCaption } = this.face;
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
                    if (ret !== undefined)
                        return ret.caption;
                }
            }
        }
        return String(this.value);
    }
    render() {
        return React.createElement("div", { className: "col-sm-10" },
            React.createElement("div", { className: "form-control-static " },
                React.createElement("button", { className: "form-control btn btn-outline-info", type: "button", style: { textAlign: 'left', paddingLeft: '0.75rem' }, onClick: this.onClick }, this.buildCaption())));
    }
}
__decorate([
    observable
], PickIdControl.prototype, "caption", void 0);
//# sourceMappingURL=pickIdControl.js.map