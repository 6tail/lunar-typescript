import {Solar, Lunar, LunarYear} from '../lib';
import * as assert from 'assert';

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

    it('test39', () => {
        const lunar = Lunar.fromYmd(2033, -11, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '2033-12-22');
    });

    it('test40', () => {
        const solar = Solar.fromYmdHms(1, 1, 1, 12, 0, 0);
        assert.strictEqual(solar.getLunar().toString(), '〇年冬月十八');
    });

    it('test41', () => {
        const solar = Solar.fromYmdHms(9999, 12, 31, 12, 0, 0);
        assert.strictEqual(solar.getLunar().toString(), '九九九九年腊月初二');
    });

    it('test42', () => {
        const lunar = Lunar.fromYmdHms(0, 11, 18, 12, 0, 0);
        assert.strictEqual(lunar.getSolar().toString(), '0001-01-01');
    });

    it('test43', () => {
        const lunar = Lunar.fromYmdHms(9999, 12, 2, 12, 0, 0);
        assert.strictEqual(lunar.getSolar().toString(), '9999-12-31');
    });

    it('test022', () => {
        const lunar = Lunar.fromYmd(2033, -11, 1);
        assert.strictEqual(lunar.getSolar().toString(), '2033-12-22');
    });

    it('test025', () => {
        const solar = Solar.fromYmdHms(2021, 6, 7, 21, 18, 0);
        assert.strictEqual(solar.getLunar().toString(), '二〇二一年四月廿七');
    });

    it('test026', () => {
        const lunar = Lunar.fromYmdHms(2021, 6, 7, 21, 18, 0);
        assert.strictEqual(lunar.getSolar().toString(), '2021-07-16');
    });

    it('test027', () => {
        const solar = Solar.fromYmd(1989, 4, 28);
        assert.strictEqual(solar.getLunar().getDay(), 23);
    });

    it('test028', () => {
        const solar = Solar.fromYmd(1990, 10, 8);
        assert.strictEqual(solar.getLunar().getMonthInGanZhiExact(), '乙酉');
    });

    it('test029', () => {
        const solar = Solar.fromYmd(1990, 10, 9);
        assert.strictEqual(solar.getLunar().getMonthInGanZhiExact(), '丙戌');
    });

    it('test030', () => {
        const solar = Solar.fromYmd(1990, 10, 8);
        assert.strictEqual(solar.getLunar().getMonthInGanZhi(), '丙戌');
    });

    it('test031', () => {
        const solar = Solar.fromYmdHms(1987, 4, 17, 9, 0, 0);
        assert.strictEqual(solar.getLunar().toString(), '一九八七年三月二十');
    });

    it('test032', () => {
        const lunar = Lunar.fromYmd(2034, 1, 1);
        assert.strictEqual(lunar.getSolar().toString(), '2034-02-19');
    });

    it('test033', () => {
        const lunar = Lunar.fromYmd(2033, 12, 1);
        assert.strictEqual(lunar.getSolar().toString(), '2034-01-20');
    });

    it('test034', () => {
        const lunar = Lunar.fromYmd(37, -12, 1);
        assert.strictEqual(lunar.getMonthInChinese(), '闰腊');
    });

    it('test035', () => {
        let lunar = Lunar.fromYmd(56, -12, 1);
        assert.strictEqual(lunar.getMonthInChinese(), '闰腊');

        lunar = Lunar.fromYmd(75, -11, 1);
        assert.strictEqual(lunar.getMonthInChinese(), '闰冬');

        lunar = Lunar.fromYmd(94, -11, 1);
        assert.strictEqual(lunar.getMonthInChinese(), '闰冬');

        lunar = Lunar.fromYmd(94, 12, 1);
        assert.strictEqual(lunar.getMonthInChinese(), '腊');

        lunar = Lunar.fromYmd(113, 12, 1);
        assert.strictEqual(lunar.getMonthInChinese(), '腊');

        lunar = Lunar.fromYmd(113, -12, 1);
        assert.strictEqual(lunar.getMonthInChinese(), '闰腊');

        lunar = Lunar.fromYmd(5552, -12, 1);
        assert.strictEqual(lunar.getMonthInChinese(), '闰腊');
    });

    it('test036', () => {
        const solar = Solar.fromYmd(5553, 1, 22);
        assert.strictEqual(solar.getLunar().toString(), '五五五二年闰腊月初二');
    });

    it('test037', () => {
        const solar = Solar.fromYmd(7013, 12, 24);
        assert.strictEqual(solar.getLunar().toString(), '七〇一三年闰冬月初四');
    });

    it('test038', () => {
        const lunar = Lunar.fromYmd(7013, -11, 4);
        assert.strictEqual(lunar.getSolar().toString(), '7013-12-24');
    });

    it('test038', () => {
        const lunar = Lunar.fromYmd(7013, -11, 4);
        assert.strictEqual(lunar.getSolar().toString(), '7013-12-24');
    });

    it('test041', () => {
        const solar = Solar.fromYmd(4, 2, 10);
        assert.strictEqual(solar.getLunar().getYearShengXiao(),'鼠');
    });

    it('test042', () => {
        const solar = Solar.fromYmd(4, 2, 9);
        assert.strictEqual(solar.getLunar().getYearShengXiao(),'猪');
    });

    it('test043', () => {
        const solar = Solar.fromYmd(1, 2, 12);
        assert.strictEqual(solar.getLunar().getYearShengXiao(),'鸡');
    });

    it('test044', () => {
        const solar = Solar.fromYmd(1, 1, 1);
        assert.strictEqual(solar.getLunar().getYearShengXiao(),'猴');
    });

    it('test045', () => {
        const lunarMonth = LunarYear.fromYear(2020).getMonth(-4);
        assert.notStrictEqual(lunarMonth, null);
        if (null != lunarMonth) {
            assert.strictEqual(lunarMonth.toString(), '2020年闰四月(29)天');
        }
    });

    it('test046', () => {
        const solar = Solar.fromYmd(2017, 2, 15);
        assert.strictEqual(solar.getLunar().getDayLu(),'子命互禄 辛命进禄');
    });

    it('test048', () => {
        const solar = Solar.fromYmd(2021, 11, 13);
        assert.strictEqual(solar.getLunar().getDayPositionTai(),'碓磨厕 外东南');
    });

    it('test049', () => {
        const solar = Solar.fromYmd(2021, 11, 12);
        assert.strictEqual(solar.getLunar().getDayPositionTai(),'占门碓 外东南');
    });

    it('test050', () => {
        const solar = Solar.fromYmd(2021, 11, 13);
        assert.strictEqual(solar.getLunar().getDayPositionFuDesc(),'西南');
    });

    it('test051', () => {
        const solar = Solar.fromYmd(2021, 11, 12);
        assert.strictEqual(solar.getLunar().getDayPositionFuDesc(),'正北');
    });

    it('test052', () => {
        const solar = Solar.fromYmd(2011, 11, 12);
        assert.strictEqual(solar.getLunar().getDayPositionTai(),'厕灶厨 外西南');
    });

    it('test053', () => {
        const solar = Solar.fromYmd(1722, 9, 25);
        assert.strictEqual(solar.getLunar().getOtherFestivals() + '','秋社');
    });

    it('test054', () => {
        const solar = Solar.fromYmd(840, 9, 14);
        assert.strictEqual(solar.getLunar().getOtherFestivals() + '','秋社');
    });

    it('test055', () => {
        const solar = Solar.fromYmd(2022, 3, 16);
        assert.strictEqual(solar.getLunar().getOtherFestivals() + '','春社');
    });

    it('test056', () => {
        const solar = Solar.fromYmd(2021, 3, 21);
        assert.strictEqual(solar.getLunar().getOtherFestivals() + '','春社');
    });

    it('test057', () => {
        const lunar = Lunar.fromYmd(1582, 9, 18);
        assert.strictEqual(lunar.getSolar().toYmd(), '1582-10-04');
    });

    it('test058', () => {
        const lunar = Lunar.fromYmd(1582, 9, 19);
        assert.strictEqual(lunar.getSolar().toYmd(), '1582-10-15');
    });

    it('test059', () => {
        const lunar = Lunar.fromYmd(1518, 1, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '1518-02-10');
    });

    it('test060', () => {
        const lunar = Lunar.fromYmd(793, 1, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '0793-02-15');
    });

    it('test061', () => {
        const lunar = Lunar.fromYmd(2025, -6, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '2025-07-25');
    });

    it('test062', () => {
        const lunar = Lunar.fromYmd(2025, 6, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '2025-06-25');
    });

    it('test063', () => {
        const lunar = Lunar.fromYmd(193, 1, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '0193-02-19');
    });

    it('test064', () => {
        const lunar = Lunar.fromYmd(288, 1, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '0288-02-19');
    });

    it('test065', () => {
        const lunar = Lunar.fromYmd(755, 1, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '0755-02-16');
    });

    it('test066', () => {
        const lunar = Lunar.fromYmd(41, 1, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '0041-02-20');
    });

    it('test067', () => {
        const lunar = Lunar.fromYmd(57, 1, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '0057-02-23');
    });

    it('test068', () => {
        const lunar = Lunar.fromYmd(345, 1, 1);
        assert.strictEqual(lunar.getSolar().toYmd(), '0345-02-18');
    });

});
