import {SolarYear} from '../lib';
import * as assert from 'assert';

describe('SolarYear', () => {

    it('toString()', () => {
        const year = SolarYear.fromYear(2019);
        assert.strictEqual(year.toString(), '2019');
        assert.strictEqual(year.next(1).toString(), '2020');
    });

    it('toFullString()', () => {
        const year = SolarYear.fromYear(2019);
        assert.strictEqual(year.toFullString(), '2019年');
        assert.strictEqual(year.next(1).toFullString(), '2020年');
    });

});
