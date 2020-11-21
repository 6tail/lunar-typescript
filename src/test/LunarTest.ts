import {Solar} from '../lib';

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

});
