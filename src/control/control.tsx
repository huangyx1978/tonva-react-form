import * as React from 'react';
import {observable, computed} from 'mobx';
import * as classNames from 'classnames';
import * as _ from 'lodash';
import {FormView} from '../formView';
import {Field} from '../field';
import {Face} from '../face';
import {Rule} from '../rule';

export abstract class ControlBase {
    protected formView: FormView;
    constructor(formView:FormView) {
        this.formView = formView;
    }
    abstract render():JSX.Element;
    get hasError():boolean {return false;}
    get filled():boolean {return false;}
    readValues(values:any):any {}
    setError(fieldName:string, error:string) {}
    setInitValues(values: any) {}
}

export abstract class Control extends ControlBase {
    protected field: Field;
    protected face: Face;
    protected props: any;
    protected rules: Rule[];

    protected element: HTMLElement;
    @observable protected value: any;

    constructor(formView:FormView, field:Field, face:Face) {
        super(formView);
        this.field = field;
        this.face = face;
        this.init();
        this.setProps();
    }
    private ref(element: HTMLElement) {
        this.element = element;
    }
    protected init() {
        this.rules = [];
        let r = this.field.rules;
        if (r !== undefined) {
            if (Array.isArray(r) === true) this.rules.push(...(r as Rule[]));
            else this.rules.push(r as Rule);
        }
    };
    protected setProps():any {
        return this.props = {
            ref: this.ref.bind(this),
            name: this.field.name,
        }
    };
    @computed get hasError():boolean {return false;}
    @computed get filled():boolean {
        let ret = this.value !== undefined && this.value !== this.field.defaultValue;
        return ret;
    }
    readValues(values:any):any {
        values[this.field.name] = this.value;
    }
    setError(fieldName:string, error:string) {}
    setInitValues(values: any) {}
}
