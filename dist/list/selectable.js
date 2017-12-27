var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { computed } from 'mobx';
import * as classNames from 'classnames';
import { ListBase } from './base';
export class Selectable extends ListBase {
    get items() { return this._items = this.list.props.items.map(v => { return { selected: false, item: v }; }); }
    onSelect(item, selected) {
        item.selected = selected;
        let anySelected = this._items.some(v => v.selected);
        this.list.props.item.onSelect(item.item, selected, anySelected);
    }
    get selectedItems() {
        return this._items.filter(v => v.selected === true);
    }
    set selectedItems(value) {
        if (value === undefined)
            return;
        let sLen = this._items.length;
        let list = value.slice();
        for (let n = 0; n < sLen; n++) {
            let sItem = this._items[n];
            let len = list.length;
            if (len === 0)
                break;
            let item = sItem.item;
            for (let i = 0; i < len; i++) {
                let v = list[i];
                if (item === v) {
                    sItem.selected = true;
                    value.splice(i, 1);
                    break;
                }
            }
        }
        ;
    }
    //w-100 mb-0 pl-3
    //m-0 w-100
    render(item, index) {
        let { className, render, onSelect } = this.list.props.item;
        return React.createElement("li", { key: index, className: classNames(className) },
            React.createElement("label", null,
                React.createElement("label", { className: "custom-control custom-checkbox" },
                    React.createElement("input", { type: 'checkbox', className: "custom-control-input", 
                        //checked={selected}
                        onChange: (e) => this.onSelect(item, e.target.checked) }),
                    React.createElement("span", { className: "custom-control-indicator" })),
                this.renderContent(item.item, index)));
    }
}
__decorate([
    computed
], Selectable.prototype, "items", null);
//# sourceMappingURL=selectable.js.map