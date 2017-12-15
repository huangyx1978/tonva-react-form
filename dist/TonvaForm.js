var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import PropTypes from 'prop-types';
import * as classNames from 'classnames';
import { observer } from 'mobx-react';
let TonvaForm = class TonvaForm extends React.Component {
    getChildContext() {
        return {
            formView: this.props.formView
        };
    }
    componentDidMount() {
        this.props.formView.setInitValues();
    }
    render() {
        let { className, formView, children } = this.props;
        return React.createElement("div", { className: classNames('container', 'mt-4', className) }, children === undefined ?
            formView.render() :
            React.createElement("form", { onSubmit: this.props.formView.onSubmit }, children));
    }
};
TonvaForm.childContextTypes = {
    formView: PropTypes.object
};
TonvaForm = __decorate([
    observer
], TonvaForm);
export { TonvaForm };
(function (TonvaForm) {
    let Row = class Row extends React.Component {
        render() {
            return this.context.formView.row(this.props.row);
        }
    };
    Row.contextTypes = {
        formView: PropTypes.object
    };
    Row = __decorate([
        observer
    ], Row);
    TonvaForm.Row = Row;
    let Others = class Others extends React.Component {
        render() {
            return this.context.formView.others();
        }
    };
    Others.contextTypes = {
        formView: PropTypes.object
    };
    Others = __decorate([
        observer
    ], Others);
    TonvaForm.Others = Others;
    let Buttons = class Buttons extends React.Component {
        render() {
            return this.context.formView.buttons();
        }
    };
    Buttons.contextTypes = {
        formView: PropTypes.object
    };
    Buttons = __decorate([
        observer
    ], Buttons);
    TonvaForm.Buttons = Buttons;
})(TonvaForm || (TonvaForm = {}));
//# sourceMappingURL=TonvaForm.js.map