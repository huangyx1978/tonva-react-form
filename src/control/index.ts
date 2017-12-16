export * from './control';
export * from './buttonsControl';
export * from './stringControl';
export * from './numberControl';

import {Field} from '../field';
import {Face} from '../face';
import {Control, ControlBase} from './control';
import {ButtonsControl} from './buttonsControl';
import {CheckControl} from './checkControl';
import {RadioControl} from './radioControl';
import {SelectControl} from './selectControl';
import {UnknownControl, EmptyControl} from './unknownControl';
import {StringControl} from './stringControl';
import {NumberControl} from './numberControl';

import {FormView, FormRow, GroupRow, FieldRow, LabelFormRow} from '../formView';
import { PickIdControl } from './pickIdControl';

export type CreateControl = (form:FormView, row: FormRow) => ControlBase

export const createControl:CreateControl = (form:FormView, row: LabelFormRow):ControlBase => {
    if ((<GroupRow>row).group !== undefined)
        return createGroupControl(form, row as GroupRow);
    if ((<FieldRow>row).field !== undefined)
        return createFieldControl(form, row as FieldRow);
    return new EmptyControl(form, row.help);
}

function createFieldControl(form:FormView, fieldRow: FieldRow):Control {
    let {field, face} = fieldRow;
    if (face !== undefined) {
        switch (face.type) {
            case 'checkbox': return new CheckControl(form, field, face);
            case 'radiobox': return new RadioControl(form, field, face);
            case 'select': return new SelectControl(form, field, face);
            case 'pick-id': return new PickIdControl(form ,field, face);
        }
    }
    switch (field.type) {
        default: return new UnknownControl(form, field, face);
        case 'string':
            return new StringControl(form, field, face);
        case 'number':
        case 'int':
        case 'dec':
            return new NumberControl(form, field, face);
    }
}

function createGroupControl(form:FormView, groupRow: GroupRow):Control {
    return new UnknownControl(form, groupRow as any, undefined);
}
