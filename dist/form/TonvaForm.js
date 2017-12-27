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
import { FormView } from './formView';
let TonvaForm = class TonvaForm extends React.Component {
    constructor(props) {
        super(props);
        this.formView = new FormView(this.props, this.props.initValues);
    }
    getChildContext() {
        return this.formView;
    }
    componentDidMount() {
        this.formView.setInitValues();
    }
    componentWillUpdate() {
        this.formView.setInitValues();
    }
    render() {
        let { className, children } = this.props;
        return React.createElement("div", { className: classNames('container', 'mt-4', className) }, children === undefined ?
            this.formView.render() :
            React.createElement("form", { onSubmit: this.formView.onSubmit }, children));
    }
};
TonvaForm.childContextTypes = {
    formView: PropTypes.object
};
TonvaForm = __decorate([
    observer
], TonvaForm);
export { TonvaForm };
//# sourceMappingURL=TonvaForm.js.map