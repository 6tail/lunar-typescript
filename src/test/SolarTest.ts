import {Solar, SolarUtil} from '../lib';
import * as assert from 'assert';

describe('Solar', () => {
    it('toYmd()', () => {
        const solar = Solar.fromYmd(2019, 5, 1);
        assert.strictEqual(solar.toYmd(), '2019-05-01');
    });

    it('toString()', () => {
        const solar = Solar.fromYmd(2019, 5, 1);
        assert.strictEqual(solar.toString(), '2019-05-01');
    });

    it('toFullString()', () => {
        const solar = Solar.fromYmd(2019, 5, 1);
        assert.strictEqual(solar.toFullString(), '2019-05-01 00:00:00 星期三 (劳动节) 金牛座');
    });

    it('getLunar()', () => {
        const solar = Solar.fromYmd(2019, 5, 1);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.toString(), '二〇一九年三月廿七');
        assert.strictEqual(lunar.toFullString(), '二〇一九年三月廿七 己亥(猪)年 戊辰(龙)月 戊戌(狗)日 子(鼠)时 纳音[平地木 大林木 平地木 桑柘木] 星期三 西方白虎 星宿[参水猿](吉) 彭祖百忌[戊不受田田主不祥 戌不吃犬作怪上床] 喜神方位[巽](东南) 阳贵神方位[艮](东北) 阴贵神方位[坤](西南) 福神方位[艮](东北) 财神方位[坎](正北) 冲[(壬辰)龙] 煞[北]');
    });

    it('next()', () => {
        let solar = Solar.fromYmd(2020, 1, 23);
        assert.strictEqual(solar.next(1).toString(), '2020-01-24');
        assert.strictEqual(solar.next(1, true).toString(), '2020-02-03');

        solar = Solar.fromYmd(2020, 2, 3);
        assert.strictEqual(solar.next(-3).toString(), '2020-01-31');
        assert.strictEqual(solar.next(-3, true).toString(), '2020-01-21');

        solar = Solar.fromYmd(2020, 2, 9);
        assert.strictEqual(solar.next(6).toString(), '2020-02-15');
        assert.strictEqual(solar.next(6, true).toString(), '2020-02-17');

        solar = Solar.fromYmd(2020, 1, 17);
        assert.strictEqual(solar.next(1).toString(), '2020-01-18');
        assert.strictEqual(solar.next(1, true).toString(), '2020-01-19');
    });

    it('getFestivals()', () => {
        let solar = Solar.fromYmd(2020, 11, 26);
        assert.strictEqual(solar.getFestivals() + '', '感恩节');

        solar = Solar.fromYmd(2020, 6, 21);
        assert.strictEqual(solar.getFestivals() + '', '父亲节');

        solar = Solar.fromYmd(2021, 5, 9);
        assert.strictEqual(solar.getFestivals() + '', '母亲节');

        solar = Solar.fromYmd(1986, 11, 27);
        assert.strictEqual(solar.getFestivals() + '', '感恩节');

        solar = Solar.fromYmd(1985, 6, 16);
        assert.strictEqual(solar.getFestivals() + '', '父亲节');

        solar = Solar.fromYmd(1984, 5, 13);
        assert.strictEqual(solar.getFestivals() + '', '母亲节');
    });

    it('getJulianDay()', () => {
        const solar = Solar.fromYmd(2020, 7, 15);
        assert.strictEqual(solar.getJulianDay(), 2459045.5);
    });

    it('fromJulianDay()', () => {
        const solar = Solar.fromJulianDay(2459045.5);
        assert.strictEqual(solar.toYmdHms(), '2020-07-15 00:00:00');
    });

    it('1', () => {
        const solar = Solar.fromYmdHms(2020, 5, 24, 13, 0, 0);
        assert.strictEqual(solar.getLunar().toString(), '二〇二〇年闰四月初二');
    });

    it('6', () => {
        const solar = Solar.fromYmd(11, 1, 1);
        assert.strictEqual(solar.getLunar().toString(), '一〇年腊月初八');
    });

    it('7', () => {
        const solar = Solar.fromYmd(11, 3, 1);
        assert.strictEqual(solar.getLunar().toString(), '一一年二月初八');
    });

    it('9', () => {
        const solar = Solar.fromYmd(26, 4, 13);
        assert.strictEqual(solar.getLunar().toString(), '二六年三月初八');
    });

    it('10', () => {
        assert.strictEqual(SolarUtil.isLeapYear(1500), false);
    });

    it('11', () => {
        const solar = Solar.fromYmd(2022, 3, 28);
        assert.strictEqual(solar.getFestivals() + '', '全国中小学生安全教育日');
    });

    it('12', () => {
        const solar = Solar.fromYmd(2021, 3, 29);
        assert.strictEqual(solar.getFestivals() + '', '全国中小学生安全教育日');
    });

    it('13', () => {
        const solar = Solar.fromYmd(1996, 3, 25);
        assert.strictEqual(solar.getFestivals() + '', '全国中小学生安全教育日');
    });

    it('14', () => {
        const solar = Solar.fromYmd(1582, 10, 4);
        assert.strictEqual(solar.nextDay(1).toYmd(), '1582-10-15');
    });

    it('15', () => {
        const solar = Solar.fromYmd(1582, 10, 15);
        assert.strictEqual(solar.nextDay(-1).toYmd(), '1582-10-04');
    });

    it('16', () => {
        const solar = Solar.fromYmd(1582, 10, 15);
        assert.strictEqual(solar.nextDay(-5).toYmd(), '1582-09-30');
    });

});
