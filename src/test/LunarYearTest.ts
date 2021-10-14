import {LunarYear} from '../lib';

const assert = require('assert');

describe('LunarYear', () => {

    it('test1', () => {
        const year = LunarYear.fromYear(2017);
        assert.strictEqual(year.getZhiShui(), '二龙治水');
        assert.strictEqual(year.getFenBing(), '二人分饼');
    });

    it('test2', () => {
        const year = LunarYear.fromYear(2018);
        assert.strictEqual(year.getZhiShui(), '二龙治水');
        assert.strictEqual(year.getFenBing(), '八人分饼');
    });

    it('test3', () => {
        const year = LunarYear.fromYear(5);
        assert.strictEqual(year.getZhiShui(), '三龙治水');
        assert.strictEqual(year.getFenBing(), '一人分饼');
    });

    it('test4', () => {
        const year = LunarYear.fromYear(2021);
        assert.strictEqual(year.getGengTian(), '十一牛耕田');
    });

});
