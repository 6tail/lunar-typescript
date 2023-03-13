import {Solar, Lunar} from '../lib';
import * as assert from 'assert';

describe('节气', () => {
    it('test1', () => {
        const solar = Solar.fromYmd(1986, 1, 5);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getJie(), '小寒');
        assert.strictEqual(lunar.getJieQi(), '小寒');
        assert.strictEqual(lunar.getCurrentJieQi() + '', '小寒');
        assert.strictEqual(lunar.getCurrentJie() + '', '小寒');
        assert.strictEqual(lunar.getCurrentQi(), null);
        assert.strictEqual(lunar.getQi(), '');
        assert.strictEqual(lunar.getPrevJie().getName(), '大雪');
        assert.strictEqual(lunar.getPrevQi().getName(), '冬至');
        assert.strictEqual(lunar.getPrevJieQi().getName(), '冬至');
    });

    it('test2', () => {
        const solar = Solar.fromYmdHms(1986, 1, 20, 17, 0, 0);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getQi(), '大寒');
        assert.strictEqual(lunar.getJieQi(), '大寒');
        assert.strictEqual(lunar.getCurrentJieQi() + '', '大寒');
        assert.strictEqual(lunar.getCurrentQi() + '', '大寒');
        assert.strictEqual(lunar.getCurrentJie(), null);
        assert.strictEqual(lunar.getJie(), '');
        assert.strictEqual(lunar.getNextJie().getName(), '立春');
        assert.strictEqual(lunar.getNextQi().getName(), '雨水');
        assert.strictEqual(lunar.getNextJieQi().getName(), '立春');
    });

    it('test3', () => {
        const solar = Solar.fromYmdHms(1986, 1, 20, 14, 0, 0);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getPrevJie().getName(), '小寒');
        assert.strictEqual(lunar.getPrevQi().getName(), '冬至');
        assert.strictEqual(lunar.getPrevJieQi().getName(), '小寒');
    });

    it('test4', () => {
        const solar = Solar.fromYmd(1986, 12, 7);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getJie(), '大雪');
        assert.strictEqual(lunar.getJieQi(), '大雪');
        assert.strictEqual(lunar.getCurrentJieQi() + '', '大雪');
        assert.strictEqual(lunar.getCurrentJie() + '', '大雪');
        assert.strictEqual(lunar.getCurrentQi(), null);
        assert.strictEqual(lunar.getQi(), '');
        assert.strictEqual(lunar.getNextJie().getName(), '大雪');
        assert.strictEqual(lunar.getNextQi().getName(), '冬至');
        assert.strictEqual(lunar.getNextJieQi().getName(), '大雪');
    });

    it('test5', () => {
        const solar = Solar.fromYmd(1986, 1, 1);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getJie(), '');
        assert.strictEqual(lunar.getQi(), '');
        assert.strictEqual(lunar.getJieQi(), '');
        assert.strictEqual(lunar.getCurrentJieQi(), null);
        assert.strictEqual(lunar.getCurrentJie(), null);
        assert.strictEqual(lunar.getCurrentQi(), null);
        assert.strictEqual(lunar.getPrevJie().getName(), '大雪');
        assert.strictEqual(lunar.getPrevQi().getName(), '冬至');
        assert.strictEqual(lunar.getPrevJieQi().getName(), '冬至');
        assert.strictEqual(lunar.getNextJie().getName(), '小寒');
        assert.strictEqual(lunar.getNextQi().getName(), '大寒');
        assert.strictEqual(lunar.getNextJieQi().getName(), '小寒');
    });

    it('test6', () => {
        const solar = Solar.fromYmd(2012, 12, 25);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getJie(), '');
        assert.strictEqual(lunar.getQi(), '');
        assert.strictEqual(lunar.getJieQi(), '');
        assert.strictEqual(lunar.getCurrentJie(), null);
        assert.strictEqual(lunar.getCurrentQi(), null);
        assert.strictEqual(lunar.getCurrentJieQi(), null);

        assert.strictEqual(lunar.getNextJie().getName(), '小寒');
        assert.strictEqual(lunar.getNextQi().getName(), '大寒');
        assert.strictEqual(lunar.getNextJieQi().getName(), '小寒');

        assert.strictEqual(lunar.getPrevJie().getName(), '大雪');
        assert.strictEqual(lunar.getPrevQi().getName(), '冬至');
        assert.strictEqual(lunar.getPrevJieQi().getName(), '冬至');
    });

    it('test7', () => {
        const lunar = Lunar.fromYmd(2012, 9, 1);
        assert.strictEqual(lunar.getJieQiTable().get('白露').toYmdHms(), '2012-09-07 13:29:00');
    });

    it('test8', () => {
        const lunar = Lunar.fromYmd(2050, 12, 1);
        assert.strictEqual(lunar.getJieQiTable().get('DA_XUE').toYmdHms(), '2050-12-07 06:41:00');
    });

    it('test9', () => {
        const solar = Solar.fromYmd(2021, 12, 21);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getJieQi(), '冬至');
        assert.strictEqual(lunar.getJie(), '');
        assert.strictEqual(lunar.getQi(), '冬至');
    });

});
