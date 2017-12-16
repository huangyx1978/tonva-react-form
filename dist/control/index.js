export * from './control';
export * from './buttonsControl';
export * from './stringControl';
export * from './numberControl';
import { CheckControl } from './checkControl';
import { RadioControl } from './radioControl';
import { SelectControl } from './selectControl';
import { UnknownControl, EmptyControl } from './unknownControl';
import { StringControl } from './stringControl';
import { NumberControl } from './numberControl';
import { PickIdControl } from './pickIdControl';
export const createControl = (form, row) => {
    if (row.group !== undefined)
        return createGroupControl(form, row);
    if (row.field !== undefined)
        return createFieldControl(form, row);
    return new EmptyControl(form, row.help);
};
function createFieldControl(form, fieldRow) {
    let { field, face } = fieldRow;
    if (face !== undefined) {
        switch (face.type) {
            case 'checkbox': return new CheckControl(form, field, face);
            case 'radiobox': return new RadioControl(form, field, face);
            case 'select': return new SelectControl(form, field, face);
            case 'pick-id': return new PickIdControl(form, field, face);
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
function createGroupControl(form, groupRow) {
    return new UnknownControl(form, groupRow, undefined);
}
//# sourceMappingURL=index.js.map