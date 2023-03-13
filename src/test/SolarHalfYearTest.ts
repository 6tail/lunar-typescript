import {SolarHalfYear} from '../lib';
import * as assert from 'assert';

describe('SolarHalfYear', () => {

    it('toString()', () => {
        const halfYear = SolarHalfYear.fromYm(2019, 5);
        assert.strictEqual(halfYear.toString(), '2019.1');
        assert.strictEqual(halfYear.next(1).toString(), '2019.2');
    });

    it('toFullString()', () => {
        const halfYear = SolarHalfYear.fromYm(2019, 5);
        assert.strictEqual(halfYear.toFullString(), '2019年上半年');
        assert.strictEqual(halfYear.next(1).toFullString(), '2019年下半年');
    });

});
