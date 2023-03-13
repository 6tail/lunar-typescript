import {SolarMonth} from '../lib';
import * as assert from 'assert';

describe('SolarMonth', () => {

    it('toString()', () => {
        const month = SolarMonth.fromYm(2019, 5);
        assert.strictEqual(month.toString(), '2019-5');
        assert.strictEqual(month.next(1).toString(), '2019-6');
    });

    it('toFullString()', () => {
        const month = SolarMonth.fromYm(2019, 5);
        assert.strictEqual(month.toFullString(), '2019年5月');
        assert.strictEqual(month.next(1).toFullString(), '2019年6月');
    });

});
