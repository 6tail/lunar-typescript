import {Solar, SolarMonth, SolarUtil, SolarWeek} from '../lib';
import * as assert from 'assert';

describe('SolarWeek', () => {
    it('testFromMonday', () => {
        const start = 1;
        const week = SolarWeek.fromYmd(2019, 5, 1, start);
        assert.strictEqual(week.toString(), '2019.5.1');
        assert.strictEqual(week.toFullString(), '2019年5月第1周');
        assert.strictEqual(SolarUtil.getWeeksOfMonth(week.getYear(), week.getMonth(), start), 5);
        assert.strictEqual(week.getFirstDay().toString(), '2019-04-29');
        assert.strictEqual(week.getFirstDayInMonth().toString(), '2019-05-01');
    });

    it('testFromSunday', () => {
        const start = 0;
        const week = SolarWeek.fromYmd(2019, 5, 1, start);
        assert.strictEqual(week.toString(), '2019.5.1');
        assert.strictEqual(week.toFullString(), '2019年5月第1周');
        assert.strictEqual(SolarUtil.getWeeksOfMonth(week.getYear(), week.getMonth(), start), 5);
        assert.strictEqual(week.getFirstDay().toString(), '2019-04-28');
        assert.strictEqual(week.getFirstDayInMonth().toString(), '2019-05-01');
    });

    it('test1', () => {
        const start = 0;
        const week = SolarWeek.fromYmd(2022, 5, 1, start);
        assert.strictEqual(week.getIndex(), 1);
    });

    it('test2', () => {
        const start = 2;
        const week = SolarWeek.fromYmd(2021, 5, 4, start);
        assert.strictEqual(week.getIndex(), 2);
    });

    it('test3', () => {
        const start = 0;
        const week = SolarWeek.fromYmd(2022, 3, 6, start);
        assert.strictEqual(week.getIndexInYear(), 11);
    });

    it('test4', () => {
        const start = 0;
        const weeks = SolarMonth.fromYm(2022, 12).getWeeks(start);
        assert.strictEqual(weeks.length, 5);
    });

    it('test5', () => {
        const week = Solar.fromYmd(1582, 10, 1).getWeek();
        assert.strictEqual(week, 1);
    });

    it('test6', () => {
        const week = Solar.fromYmd(1582, 10, 15).getWeek();
        assert.strictEqual(week, 5);
    });

    it('test7', () => {
        assert.strictEqual(Solar.fromYmd(1129, 11, 17).getWeek(), 0);
    });

    it('test8', () => {
        assert.strictEqual(Solar.fromYmd(1129, 11, 1).getWeek(), 5);
    });

    it('test9', () => {
        assert.strictEqual(Solar.fromYmd(8, 11, 1).getWeek(), 4);
    });

    it('test10', () => {
        assert.strictEqual(Solar.fromYmd(1582, 9, 30).getWeek(), 0);
    });

    it('test11', () => {
        assert.strictEqual(Solar.fromYmd(1582, 1, 1).getWeek(), 1);
    });

    it('test12', () => {
        assert.strictEqual(Solar.fromYmd(1500, 2, 29).getWeek(), 6);
    });

    it('test13', () => {
        assert.strictEqual(Solar.fromYmd(9865, 7, 26).getWeek(), 3);
    });

    it('test14', () => {
        assert.strictEqual(Solar.fromYmd(1961, 9, 30).getWeek(), 6);
        assert.strictEqual(Solar.fromYmdHms(1961, 9, 30, 23, 59, 59).getWeek(), 6);
    });

    it('test15', () => {
        assert.strictEqual(Solar.fromYmdHms(2021, 9, 15, 0, 0, 0).getWeek(), 3);
        assert.strictEqual(Solar.fromYmdHms(2021, 9, 15, 23, 59, 59).getWeek(), 3);
    });

});
