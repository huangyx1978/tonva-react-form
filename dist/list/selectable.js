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
    get items() { return this._items = this.props.items.map(v => { return { selected: false, item: v }; }); }
    onSelect(item, selected) {
        item.selected = selected;
        let anySelected = this._items.some(v => v.selected);
        this.props.item.onSelect(item.item, selected, anySelected);
    }
    //w-100 mb-0 pl-3
    //m-0 w-100
    render(item, index) {
        let { className, render, onSelect } = this.props.item;
        return React.createElement("li", { key: index, className: classNames(className) },
            React.createElement("label", { className: "" },
                React.createElement("label", { className: "custom-control custom-checkbox" },
                    React.createElement("input", { type: 'checkbox', className: "custom-control-input", 
                        //checked={selected}
                        onChange: (e) => this.onSelect(item, e.target.checked) }),
                    React.createElement("span", { className: "custom-control-indicator" })),
                this.renderContent(item, index)));
    }
}
__decorate([
    computed
], Selectable.prototype, "items", null);
//# sourceMappingURL=selectable.js.map