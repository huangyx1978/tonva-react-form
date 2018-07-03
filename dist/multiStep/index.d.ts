import * as React from 'react';
import { FormProps, FormRow, SubmitResult } from '../form';
export interface Step {
    formRows: FormRow[];
    next: undefined | string | ((values: any) => string);
    ex?: any;
}
export interface MultiStepProps {
    className?: string;
    header?: (step: Step, num: number) => JSX.Element;
    footer?: (step: Step, num: number) => JSX.Element;
    steps: {
        [name: string]: Step;
    };
    first: string;
    onSubmit: (values: any) => Promise<SubmitResult | undefined>;
    submitButton?: string | JSX.Element;
}
export interface StepView {
    stepName: string;
    step: Step;
    props: FormProps;
}
export interface MultiStepState {
    topView: StepView;
    stepViews: StepView[];
}
export declare class MultiStep extends React.Component<MultiStepProps, MultiStepState> {
    private values;
    private stepViews;
    private topView;
    constructor(props: any);
    private setStep;
    componentWillMount(): void;
    private onPrev;
    private onNext;
    render(): JSX.Element;
}
