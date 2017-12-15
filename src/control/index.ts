export * from './control';
export * from './buttonsControl';
export * from './stringControl';
export * from './numberControl';

import {Field} from '../field';
import {Face} from '../face';
import {Control} from './control';
import {ButtonsControl} from './buttonsControl';
import {UnknownControl} from './unknownControl';
import {StringControl} from './stringControl';
import {NumberControl} from './numberControl';

import {FormView, FormRow, GroupRow, FieldRow} from '../formView';

export type CreateControl = (form:FormView, row: FormRow) => Control

export const createControl:CreateControl = (form:FormView, row: FormRow):Control => {
    if ((<GroupRow>row).group !== undefined)
        return createGroupControl(form, row as GroupRow);
    return createFieldControl(form, row as FieldRow);
}

function createFieldControl(form:FormView, fieldRow: FieldRow):Control {
    let {field, face} = fieldRow;
    
    switch (field.type) {
        default: return new UnknownControl(form, field, face);
        case 'string':
            return createStringControl(form, field, face);
        case 'number':
        case 'int':
        case 'dec':
            return createNumberControl(form, field, face);
    }
}

function createStringControl(form:FormView, field:Field, face:Face):Control {
    return new StringControl(form, field, face);
}

function createNumberControl(form:FormView, field:Field, face:Face):Control {
    return new NumberControl(form, field, face);
}

function createGroupControl(form:FormView, groupRow: GroupRow):Control {
    return new UnknownControl(form, groupRow as any, undefined);
}
