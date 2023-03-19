import {LunarMonth} from '../lib';
import * as assert from 'assert';

describe('LunarMonth', () => {

    it('test1', () => {
        const month = LunarMonth.fromYm(2023, 1)!;
        assert.strictEqual(month.getIndex(), 1);
        assert.strictEqual(month.getGanZhi(), '甲寅');
    });

    it('test2', () => {
        const month = LunarMonth.fromYm(2023, -2)!;
        assert.strictEqual(month.getIndex(), 3);
        assert.strictEqual(month.getGanZhi(), '丙辰');
    });

    it('test3', () => {
        const month = LunarMonth.fromYm(2023, 3)!;
        assert.strictEqual(month.getIndex(), 4);
        assert.strictEqual(month.getGanZhi(), '丁巳');
    });

    it('test4', () => {
        const month = LunarMonth.fromYm(2024, 1)!;
        assert.strictEqual(month.getIndex(), 1);
        assert.strictEqual(month.getGanZhi(), '丙寅');
    });

    it('test5', () => {
        const month = LunarMonth.fromYm(2023, 12)!;
        assert.strictEqual(month.getIndex(), 13);
        assert.strictEqual(month.getGanZhi(), '丙寅');
    });

    it('test6', () => {
        const month = LunarMonth.fromYm(2022, 1)!;
        assert.strictEqual(month.getIndex(), 1);
        assert.strictEqual(month.getGanZhi(), '壬寅');
    });

});
