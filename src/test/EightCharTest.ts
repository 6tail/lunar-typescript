import {Solar, Lunar} from '../lib';

const assert = require('assert');

describe('EightChar', () => {
    it('test1', () => {
        const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYear(), '乙酉');
        assert.strictEqual(eightChar.getMonth(), '戊子');
        assert.strictEqual(eightChar.getDay(), '辛巳');
        assert.strictEqual(eightChar.getTime(), '壬辰');
    });

    it('test2', () => {
        const solar = Solar.fromYmdHms(1988, 2, 15, 23, 30, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYear(), '戊辰');
        assert.strictEqual(eightChar.getMonth(), '甲寅');
        assert.strictEqual(eightChar.getDay(), '庚子');
        assert.strictEqual(eightChar.getTime(), '戊子');
    });

    it('test2a', () => {
        const solar = Solar.fromYmdHms(1988, 2, 15, 23, 30, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();

        eightChar.setSect(1);

        assert.strictEqual(eightChar.getYear(), '戊辰');
        assert.strictEqual(eightChar.getMonth(), '甲寅');
        assert.strictEqual(eightChar.getDay(), '辛丑');
        assert.strictEqual(eightChar.getTime(), '戊子');
    });

    it('test3', () => {
        const solar = Solar.fromYmdHms(1988, 2, 15, 22, 30, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYear(), '戊辰');
        assert.strictEqual(eightChar.getMonth(), '甲寅');
        assert.strictEqual(eightChar.getDay(), '庚子');
        assert.strictEqual(eightChar.getTime(), '丁亥');
    });

    it('test4', () => {
        const solar = Solar.fromYmdHms(1988, 2, 2, 22, 30, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYear(), '丁卯');
        assert.strictEqual(eightChar.getMonth(), '癸丑');
        assert.strictEqual(eightChar.getDay(), '丁亥');
        assert.strictEqual(eightChar.getTime(), '辛亥');
    });

    it('test5', () => {
        const lunar = Lunar.fromYmdHms(2019,12,12,11,22,0);
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYear(), '己亥');
        assert.strictEqual(eightChar.getMonth(), '丁丑');
        assert.strictEqual(eightChar.getDay(), '戊申');
        assert.strictEqual(eightChar.getTime(), '戊午');
    });

    it('地支藏干', () => {
        const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYearHideGan() + '', '辛');
        assert.strictEqual(eightChar.getMonthHideGan() + '', '癸');
        assert.strictEqual(eightChar.getDayHideGan() + '', '丙,庚,戊');
        assert.strictEqual(eightChar.getTimeHideGan() + '', '戊,乙,癸');
    });

    it('天干十神', () => {
        const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYearShiShenGan(), '偏财');
        assert.strictEqual(eightChar.getMonthShiShenGan(), '正印');
        assert.strictEqual(eightChar.getDayShiShenGan(), '日主');
        assert.strictEqual(eightChar.getTimeShiShenGan(), '伤官');
    });

    it('地支十神', () => {
        const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYearShiShenZhi() + '', '比肩');
        assert.strictEqual(eightChar.getMonthShiShenZhi() + '', '食神');
        assert.strictEqual(eightChar.getDayShiShenZhi() + '', '正官,劫财,正印');
        assert.strictEqual(eightChar.getTimeShiShenZhi() + '', '正印,偏财,食神');
    });

    it('地势', () => {
        const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYearDiShi(), '临官');
        assert.strictEqual(eightChar.getMonthDiShi(), '长生');
        assert.strictEqual(eightChar.getDayDiShi(), '死');
        assert.strictEqual(eightChar.getTimeDiShi(), '墓');
    });

    it('纳音', () => {
        const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getYearNaYin(), '泉中水');
        assert.strictEqual(eightChar.getMonthNaYin(), '霹雳火');
        assert.strictEqual(eightChar.getDayNaYin(), '白蜡金');
        assert.strictEqual(eightChar.getTimeNaYin(), '长流水');
    });

    it('胎元', () => {
        let solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
        let lunar = solar.getLunar();
        let eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getTaiYuan(), '己卯');

        solar = Solar.fromYmdHms(1995, 12, 18, 10, 28, 0);
        lunar = solar.getLunar();
        eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getTaiYuan(), '己卯');
    });

    it('命宫', () => {
        let solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
        let lunar = solar.getLunar();
        let eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getMingGong(), '己丑');

        solar = Solar.fromYmdHms(1998, 6, 11, 4, 28, 0);
        lunar = solar.getLunar();
        eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getMingGong(), '辛酉');

        solar = Solar.fromYmdHms(1995, 12, 18, 10, 28, 0);
        lunar = solar.getLunar();
        eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getMingGong(), '戊子');
    });

    it('身宫', () => {
        const solar = Solar.fromYmdHms(1995, 12, 18, 10, 28, 0);
        const lunar = solar.getLunar();
        const eightChar = lunar.getEightChar();
        assert.strictEqual(eightChar.getShenGong(), '壬午');
    });
});
