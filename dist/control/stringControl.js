import * as _ from 'lodash';
import { CharsControl } from './charsControl';
export class StringControl extends CharsControl {
    constructor() {
        super(...arguments);
        this.inputType = "text";
    }
    setProps() {
        let p = super.setProps();
        _.assign(p, {
            maxLength: this.field.maxLength,
        });
        return p;
    }
    ;
}
//# sourceMappingURL=stringControl.js.map