import * as React from 'react';
import {observer} from 'mobx-react';
import * as className from 'classnames';
import {ListView} from '../listView';
import {LabeledProp, StringProp, NumberProp, ListProp, ComponentProp} from './propView';

export abstract class PropRow {
    abstract render(key:string): any;
}

export class PropBorder extends PropRow {
    render(key:string): JSX.Element {
        return <div key={'_b_' + key} className="row">
            <div className="col-sm-12">
                <div style={{borderTop: '1px solid #f0f0f0'}} />
            </div>
        </div>;
    }
}

export class PropGap extends PropRow {
    render(key:string): JSX.Element {
        return <div key={'_g_' + key} className="row py-2" style={{backgroundColor: '#f0f0f0'}} />;
    }
}

export abstract class LabeledPropRow extends PropRow {
    protected prop: LabeledProp;
    protected values: any;
    constructor(prop: LabeledProp, values: any) {
        super();
        this.prop = prop;
        this.values = values;
    }
    render(key:string):any {
        let {onClick} = this.prop;
        let style;
        if (onClick !== undefined) {
            style = {cursor: 'pointer'};
        }
        return <div key={key} className="row bg-white" onClick={onClick} style={style}>
            {this.renderLabel()}
            {this.renderProp()}
        </div>;
    }
    protected renderLabel():any {
        let {label} = this.prop;
        if (label === undefined) return null;
        return <label className="col-sm-2 col-form-label">
            {label}
        </label>;
    }
    protected renderProp():any {
        let {label} = this.prop;
        return <div className={label===undefined? "col-sm-12":"col-sm-10"}>
            {this.renderPropBody()}
        </div>;
    }
    protected renderPropBody():any {
        return <div className="form-control-plaintext">
            {this.renderPropContent()}
        </div>;
    }
    protected renderPropContent():any {
        return 'content';
    }
}

export class StringPropRow extends LabeledPropRow {
    protected prop: StringProp;
    protected renderPropContent() {
        return this.values[this.prop.name];
    }
}

export class NumberPropRow extends LabeledPropRow {
    protected prop: NumberProp;
    protected renderPropContent() {
        return this.values[this.prop.name];
    }
}

export class ListPropRow extends LabeledPropRow {
    protected prop: ListProp;
    protected renderPropBody() {
        let {list, row} = this.prop;
        let items:any[] = typeof list === 'string'? this.values[name] : list;
        if (items === undefined) return <div/>;
        // new row(item)
        return <div>
            {
                items.map((item, index) => <React.Fragment key={index}>
                    {index===0? null: <div style={{borderBottom:'1px solid #f0f0f0'}} />}
                    {React.createElement(row, item)}
                </React.Fragment>)
            }
        </div>;
    }
}

export class ComponentPropRow extends LabeledPropRow {
    protected prop: ComponentProp;
    protected renderPropBody() {
        let {component} = this.prop;
        return component;
    }
}

export class PropContainer extends PropRow {
    render(key:string): JSX.Element {
        return <div className="row bg-white">
            <label className="col-sm-2 col-form-label">
                AAABBBCCC
            </label>
            <div className="col-sm-10">
                <div className="form-control-plaintext">
                    dsfasfa sdf asdf a
                </div>
            </div>
        </div>;
    }
}
