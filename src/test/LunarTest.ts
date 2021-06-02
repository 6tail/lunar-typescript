import {Solar, Lunar} from '../lib';

const assert = require('assert');

describe('Lunar', () => {
    it('干支', () => {
        let solar = Solar.fromYmdHms(2020, 1, 1, 13, 22, 0);
        let lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');
        assert.strictEqual(lunar.getMonthInGanZhi(), '丙子');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '丙子');

        //小寒
        solar = new Solar(2020, 1, 6, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');

        assert.strictEqual(lunar.getMonthInGanZhi(), '丁丑');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '丁丑');


        solar = new Solar(2020, 1, 20, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');

        assert.strictEqual(lunar.getMonthInGanZhi(), '丁丑');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '丁丑');


        //春节
        solar = new Solar(2020, 1, 25, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');

        assert.strictEqual(lunar.getMonthInGanZhi(), '丁丑');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '丁丑');


        solar = new Solar(2020, 1, 30, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');

        assert.strictEqual(lunar.getMonthInGanZhi(), '丁丑');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '丁丑');


        solar = new Solar(2020, 2, 1, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');

        assert.strictEqual(lunar.getMonthInGanZhi(), '丁丑');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '丁丑');


        solar = new Solar(2020, 2, 4, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');

        assert.strictEqual(lunar.getMonthInGanZhi(), '戊寅');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '丁丑');


        solar = new Solar(2020, 2, 4, 18, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '庚子');

        assert.strictEqual(lunar.getMonthInGanZhi(), '戊寅');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '戊寅');


        solar = new Solar(2020, 2, 5, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '庚子');

        assert.strictEqual(lunar.getMonthInGanZhi(), '戊寅');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '戊寅');


        solar = new Solar(2020, 5, 22, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '庚子');

        assert.strictEqual(lunar.getMonthInGanZhi(), '辛巳');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '辛巳');


        solar = new Solar(2020, 5, 23, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '庚子');

        assert.strictEqual(lunar.getMonthInGanZhi(), '辛巳');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '辛巳');

        solar = new Solar(2020, 5, 29, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '庚子');

        assert.strictEqual(lunar.getMonthInGanZhi(), '辛巳');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '辛巳');

        solar = new Solar(2020, 6, 1, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '庚子');

        assert.strictEqual(lunar.getMonthInGanZhi(), '辛巳');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '辛巳');

        solar = new Solar(2020, 6, 29, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '庚子');

        assert.strictEqual(lunar.getMonthInGanZhi(), '壬午');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '壬午');

        solar = new Solar(2019, 5, 1, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');

        assert.strictEqual(lunar.getMonthInGanZhi(), '戊辰');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '戊辰');

        solar = new Solar(1986, 5, 29, 13, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '丙寅');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '丙寅');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '丙寅');

        assert.strictEqual(lunar.getMonthInGanZhi(), '癸巳');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '癸巳');

        solar = new Solar(1986, 5, 1, 1, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '丙寅');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '丙寅');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '丙寅');

        assert.strictEqual(lunar.getMonthInGanZhi(), '壬辰');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '壬辰');

        solar = new Solar(1986, 5, 6, 1, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '丙寅');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '丙寅');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '丙寅');

        assert.strictEqual(lunar.getMonthInGanZhi(), '癸巳');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '壬辰');

        solar = new Solar(1986, 5, 6, 23, 22, 0);
        lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '丙寅');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '丙寅');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '丙寅');

        assert.strictEqual(lunar.getMonthInGanZhi(), '癸巳');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '癸巳');
    });

    it('test8', () => {
        const lunar = Lunar.fromYmdHms(2020, 12, 10, 13, 0, 0);
        assert.strictEqual(lunar.toString(), '二〇二〇年腊月初十');
        assert.strictEqual(lunar.getSolar().toString(), '2021-01-22');
    });

    it('test9', () => {
        const lunar = Lunar.fromYmdHms(1500, 1, 1, 12, 0, 0);
        assert.strictEqual(lunar.getSolar().toString(), '1500-01-31');
    });

    it('test10', () => {
        const lunar = Lunar.fromYmdHms(1500, 12, 29, 12, 0, 0);
        assert.strictEqual(lunar.getSolar().toString(), '1501-01-18');
    });

    it('test11', () => {
        const solar = Solar.fromYmdHms(1500, 1, 1, 12, 0, 0);
        assert.strictEqual(solar.getLunar().toString(), '一四九九年腊月初一');
    });

    it('test12', () => {
        const solar = Solar.fromYmdHms(1500, 12, 31, 12, 0, 0);
        assert.strictEqual(solar.getLunar().toString(), '一五〇〇年腊月十一');
    });

    it('test13', () => {
        const solar = Solar.fromYmdHms(1582, 10, 4, 12, 0, 0);
        assert.strictEqual(solar.getLunar().toString(), '一五八二年九月十八');
    });

    it('test14', () => {
        const solar = Solar.fromYmdHms(1582, 10, 15, 12, 0, 0);
        assert.strictEqual(solar.getLunar().toString(), '一五八二年九月十九');
    });

    it('test15', () => {
        const lunar = Lunar.fromYmdHms(1582, 9, 18, 12, 0, 0);
        assert.strictEqual(lunar.getSolar().toString(), '1582-10-04');
    });

    it('test16', () => {
        const lunar = Lunar.fromYmdHms(1582, 9, 19, 12, 0, 0);
        assert.strictEqual(lunar.getSolar().toString(), '1582-10-15');
    });

    it('test17', () => {
        const lunar = Lunar.fromYmdHms(2019, 12, 12, 11, 22, 0);
        assert.strictEqual(lunar.getSolar().toString(), '2020-01-06');
    });

    it('test18', () => {
        const solar = Solar.fromYmdHms(2020, 2, 4, 13, 22, 0);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '庚子');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');
        assert.strictEqual(lunar.getMonthInGanZhi(), '戊寅');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '丁丑');
    });

    it('test19', () => {
        const solar = Solar.fromYmdHms(2019, 2, 8, 13, 22, 0);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '己亥');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '己亥');
        assert.strictEqual(lunar.getMonthInGanZhi(), '丙寅');
        assert.strictEqual(lunar.getMonthInGanZhiExact(), '丙寅');
    });

    it('test20', () => {
        const solar = Solar.fromYmdHms(1988, 2, 15, 23, 30, 0);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '丁卯');
        assert.strictEqual(lunar.getYearInGanZhiByLiChun(), '戊辰');
        assert.strictEqual(lunar.getYearInGanZhiExact(), '戊辰');
    });

    it('test21', () => {
        const solar = Solar.fromYmd(1988, 2, 15);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '丁卯');
    });

    it('test22', () => {
        const solar = Solar.fromYmd(2012, 12, 27);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '壬辰');
        assert.strictEqual(lunar.getMonthInGanZhi(), '壬子');
        assert.strictEqual(lunar.getDayInGanZhi(), '壬戌');
    });

    it('test23', () => {
        const solar = Solar.fromYmd(2012, 12, 20);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '壬辰');
        assert.strictEqual(lunar.getMonthInGanZhi(), '壬子');
        assert.strictEqual(lunar.getDayInGanZhi(), '乙卯');
    });

    it('test24', () => {
        const solar = Solar.fromYmd(2012, 11, 20);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '壬辰');
        assert.strictEqual(lunar.getMonthInGanZhi(), '辛亥');
        assert.strictEqual(lunar.getDayInGanZhi(), '乙酉');
    });

    it('test25', () => {
        const solar = Solar.fromYmd(2012, 10, 20);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '壬辰');
        assert.strictEqual(lunar.getMonthInGanZhi(), '庚戌');
        assert.strictEqual(lunar.getDayInGanZhi(), '甲寅');
    });

    it('test26', () => {
        const solar = Solar.fromYmd(2012, 9, 20);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearInGanZhi(), '壬辰');
        assert.strictEqual(lunar.getMonthInGanZhi(), '己酉');
        assert.strictEqual(lunar.getDayInGanZhi(), '甲申');
    });

    it('test26', () => {
        const solar = Solar.fromYmd(2012, 8, 5);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getDayInGanZhi(), '戊戌');
    });

    it('test27', () => {
        const solar = Solar.fromYmd(2000, 2, 2);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getDayInGanZhi(), '庚寅');
    });

    it('test28', () => {
        const solar = Solar.fromYmd(1996, 1, 16);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getDayInGanZhi(), '壬子');
    });

    it('test29', () => {
        const solar = Solar.fromYmd(1997, 2, 16);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getDayInGanZhi(), '己丑');
    });

    it('test30', () => {
        const solar = Solar.fromYmd(1998, 3, 16);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getDayInGanZhi(), '壬戌');
    });

    it('test31', () => {
        const solar = Solar.fromYmd(1999, 4, 16);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getDayInGanZhi(), '戊戌');
    });

    it('test32', () => {
        const solar = Solar.fromYmd(2000, 7, 16);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getDayInGanZhi(), '乙亥');
    });

    it('test33', () => {
        const solar = Solar.fromYmd(2000, 1, 6);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getDayInGanZhi(), '癸亥');
    });

    it('test34', () => {
        const solar = Solar.fromYmd(2000, 1, 9);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getDayInGanZhi(), '丙寅');
    });

    it('test35', () => {
        const lunar = Lunar.fromYmd(2021, 12, 29);
        assert.strictEqual(lunar.getFestivals()[0], '除夕');
    });

    it('test36', () => {
        const lunar = Lunar.fromYmd(2020, 12, 30);
        assert.strictEqual(lunar.getFestivals()[0], '除夕');
    });

    it('test37', () => {
        const lunar = Lunar.fromYmd(2020, 12, 29);
        assert.strictEqual(lunar.getFestivals().length, 0);
    });

    it('test38', () => {
        const solar = Solar.fromYmd(2022, 1, 31);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getFestivals()[0], '除夕');
    });

});
