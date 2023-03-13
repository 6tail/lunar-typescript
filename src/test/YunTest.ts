import {Solar, Lunar} from '../lib';
import * as assert from 'assert';

describe('运', () => {
    it('起运', () => {
        const solar = Solar.fromYmdHms(1981, 1, 29, 23, 37, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        const yun = eightChar.getYun(0);
        assert.strictEqual(yun.getStartYear(), 8,'起运年数');
        assert.strictEqual(yun.getStartMonth(), 0,'起运月数');
        assert.strictEqual(yun.getStartDay(), 20,'起运天数');
        assert.strictEqual(yun.getStartSolar().toYmd(), '1989-02-18','起运阳历');
    });

    it('test2', () => {
        const lunar = Lunar.fromYmdHms(2019, 12, 12, 11, 22, 0);
        const eightChar = lunar.getEightChar();
        const yun = eightChar.getYun(1);
        assert.strictEqual(yun.getStartYear(), 0,'起运年数');
        assert.strictEqual(yun.getStartMonth(), 1,'起运月数');
        assert.strictEqual(yun.getStartDay(), 0,'起运天数');
        assert.strictEqual(yun.getStartSolar().toYmd(), '2020-02-06','起运阳历');
    });

    it('test3', () => {
        const solar = Solar.fromYmdHms(2020, 1, 6, 11, 22, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        const yun = eightChar.getYun(1);
        assert.strictEqual(yun.getStartYear(), 0,'起运年数');
        assert.strictEqual(yun.getStartMonth(), 1,'起运月数');
        assert.strictEqual(yun.getStartDay(), 0,'起运天数');
        assert.strictEqual(yun.getStartSolar().toYmd(), '2020-02-06','起运阳历');
    });

    it('test4', () => {
        const solar = Solar.fromYmdHms(2022, 3, 9, 20, 51, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        const yun = eightChar.getYun(1);
        assert.strictEqual(yun.getStartSolar().toYmd(), '2030-12-19','起运阳历');
    });

    it('test5', () => {
        const solar = Solar.fromYmdHms(2022, 3, 9, 20, 51, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        const yun = eightChar.getYun(1, 2);
        assert.strictEqual(yun.getStartYear(), 8,'起运年数');
        assert.strictEqual(yun.getStartMonth(), 9,'起运月数');
        assert.strictEqual(yun.getStartDay(), 2,'起运天数');
        assert.strictEqual(yun.getStartSolar().toYmd(), '2030-12-12','起运阳历');
    });

    it('test6', () => {
        const solar = Solar.fromYmdHms(2018, 6, 11, 9, 30, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        const yun = eightChar.getYun(0, 2);
        assert.strictEqual(yun.getStartSolar().toYmd(), '2020-03-21','起运阳历');
    });
});
