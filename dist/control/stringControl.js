import * as _ from 'lodash';
import { CharsControl } from './charsControl';
export class StringControl extends CharsControl {
    setProps() {
        let p = super.setProps();
        _.assign(p, {
            type: 'text',
            maxLength: this.field.maxLength,
        });
        return p;
    }
    ;
}
//# sourceMappingURL=stringControl.js.map