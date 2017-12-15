export * from './control';
export * from './buttonsControl';
export * from './stringControl';
export * from './numberControl';
import { UnknownControl } from './unknownControl';
import { StringControl } from './stringControl';
import { NumberControl } from './numberControl';
export const createControl = (form, row) => {
    if (row.group !== undefined)
        return createGroupControl(form, row);
    return createFieldControl(form, row);
};
function createFieldControl(form, fieldRow) {
    let { field, face } = fieldRow;
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
function createStringControl(form, field, face) {
    return new StringControl(form, field, face);
}
function createNumberControl(form, field, face) {
    return new NumberControl(form, field, face);
}
function createGroupControl(form, groupRow) {
    return new UnknownControl(form, groupRow, undefined);
}
//# sourceMappingURL=index.js.map