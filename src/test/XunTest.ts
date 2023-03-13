import {Solar} from '../lib';
import * as assert from 'assert';

describe('旬', () => {
    it('旬', () => {
        const solar = Solar.fromYmdHms(2020, 11, 19, 0, 0, 0);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearXun(), '甲午');
    });

    it('旬空', () => {
        const solar = Solar.fromYmdHms(2020, 11, 19, 0, 0, 0);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearXunKong(), '辰巳');
        assert.strictEqual(lunar.getMonthXunKong(), '午未');
        assert.strictEqual(lunar.getDayXunKong(), '戌亥');
    });

    it('八字旬空', () => {
        const solar = Solar.fromYmdHms(1990, 12, 23, 8, 37, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getDayXunKong(), '子丑');
    });
});
