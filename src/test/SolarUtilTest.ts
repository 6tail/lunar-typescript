import {SolarUtil} from '../lib';

const assert = require('assert');

describe('SolarUtil', () => {
    it('isLeapYear()', () => {
        assert.strictEqual(SolarUtil.isLeapYear(2020), true);
        assert.strictEqual(SolarUtil.isLeapYear(2021), false);
    });
    it('getDaysOfMonth()', () => {
        assert.strictEqual(SolarUtil.getDaysOfMonth(2020, 1), 31);
        assert.strictEqual(SolarUtil.getDaysOfMonth(2021, 2), 28);
    });
});
