import * as React from 'react';
import PropTypes from 'prop-types';
import * as classNames from 'classnames';
import {observer} from 'mobx-react';
import {FormView} from './formView';

export interface TonvaFormProps {
    className?: string;
    formView: FormView;
}

@observer 
export class TonvaForm extends React.Component<TonvaFormProps, {}> {
    static childContextTypes = {
        formView: PropTypes.object
    }
    getChildContext(): TonvaFormProps {
        return {
             formView: this.props.formView
         }
     }
    componentDidMount() {
        this.props.formView.setInitValues();
    }
    render() {
        let {className, formView, children} = this.props;
        return <div className={classNames('container', 'mt-4', className)}>
            {
                children === undefined? 
                    formView.render() : 
                    <form onSubmit={this.props.formView.onSubmit}>{children}</form>
            }
        </div>;
    }
}
/*
export namespace TonvaForm {    
    @observer 
    export class Row extends React.Component<{row:number|string}> {
        static contextTypes = {
            formView: PropTypes.object
        }
        context: TonvaFormProps;
        render() {
            return this.context.formView.row(this.props.row);
        }
    }

    @observer 
    export class Others extends React.Component {
        static contextTypes = {
            formView: PropTypes.object
        }
        context: TonvaFormProps;
        render() {
            return this.context.formView.others();
        }
    }

    @observer 
    export class Buttons extends React.Component {
        static contextTypes = {
            formView: PropTypes.object
        }
        context: TonvaFormProps;
        render() {
            return this.context.formView.buttons();
        }
    }
}
*/