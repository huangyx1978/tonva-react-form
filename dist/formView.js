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
import { computed } from 'mobx';
import { ButtonsControl } from './control';
import { bootstrapCreateRow, elementCreateRow } from './rowContainer';
export class FormView {
    constructor(props, initValues) {
        this.rows = [];
        this.props = props;
        this.initValues = initValues;
        this.buildRows(props);
        this.createControl = props.createControl;
        this.onSubmit = this.onSubmit.bind(this);
    }
    get hasError() {
        return this.rows.some(row => row.hasError);
    }
    get nothing() {
        let ret = this.rows.every(row => !row.filled);
        return ret;
    }
    readValues() {
        let values = {};
        for (let row of this.rows) {
            row.readValues(values);
        }
        return values;
    }
    clearErrors() {
    }
    setError(fieldName, error) {
        for (let row of this.rows) {
            row.setError(fieldName, error);
        }
    }
    setInitValues() {
        if (this.initValues === undefined)
            return;
        for (let row of this.rows) {
            row.setInitValues(this.initValues);
        }
    }
    buildRows(props) {
        let { formRows, createRow } = props;
        if (formRows === undefined) {
            console.log('TonvaForm need formRows defined');
            return;
        }
        for (let row of formRows) {
            this.rows.push(this.buildRow(row, createRow));
        }
        this.buttonsRow = this.buildRow({ createControl: this.createButtons.bind(this) }, undefined);
    }
    buildRow(formRow, formRowCreator) {
        let createRow;
        let type = formRow.type;
        if (type !== undefined) {
            createRow = elementCreateRow;
        }
        else {
            createRow = formRow.createRow;
            if (createRow === undefined) {
                createRow = formRowCreator;
                if (createRow === undefined)
                    createRow = bootstrapCreateRow;
            }
        }
        let row = createRow(this, formRow);
        return row;
    }
    createButtons(form, row) {
        return new ButtonsControl(form);
    }
    isOk() {
        let isOk = true;
        for (let row of this.rows) {
            if (!row.isOk())
                isOk = false;
        }
        return isOk;
    }
    render() {
        return React.createElement("form", { onSubmit: this.onSubmit },
            this.rows.map((row, index) => row.render(index)),
            this.buttons());
    }
    /*
        row(fieldName:string):JSX.Element {
            let index = this.rows.findIndex(r => r.contains(fieldName));
            if (index < 0) return null;
            return this.rows[index].render(index);
        }
    
        others():JSX.Element[] {
            let ret = [];
            let len = this.rows.length;
            for (let i=0; i<len; i++) {
                let r = this.rows[i];
                if (r.key !== undefined) continue;
                ret.push(r.render(i));
            }
            return ret;
        }
    */
    buttons() {
        return this.buttonsRow.render(this.rows.length);
    }
    onSubmit(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            if (!this.isOk())
                return;
            let values = this.readValues();
            yield this.props.onSumit(values);
        });
    }
}
__decorate([
    computed
], FormView.prototype, "hasError", null);
__decorate([
    computed
], FormView.prototype, "nothing", null);
//# sourceMappingURL=formView.js.map