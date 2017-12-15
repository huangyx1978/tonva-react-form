import { NumField } from '../field';
import { FieldView, LabelFieldViewProps } from './fieldView';
import { FormView } from '../formView';
export interface LabelNumProps extends LabelFieldViewProps {
    placeholder?: string;
}
export declare function numView(form: FormView, field: NumField, props: LabelNumProps): FieldView;
