import {I18n, Lunar} from '../lib';
import * as assert from 'assert';

describe('i18n', () => {
    it('test1', () => {
        const lunar = Lunar.fromYmd(2023, 1, 1);
        assert.strictEqual(lunar.getYearShengXiao(), '兔');

        I18n.setLanguage('en');
        assert.strictEqual(lunar.getYearShengXiao(), 'Rabbit');

        I18n.setLanguage('chs');
    });

    it('test2', () => {
        const lunar = Lunar.fromDate(new Date());
        console.log(lunar.toFullString());

        I18n.setLanguage('en');
        console.log(lunar.toFullString());

        I18n.setLanguage('chs');
    });

    it('test3', () => {
        const lunar = Lunar.fromYmd(2023, 3, 7);
        I18n.setLanguage('en');
        assert.strictEqual(lunar.getDayNineStar().toString(), '3BlueWood天玑');
        I18n.setLanguage('chs');
    });

    it('test4', () => {
        const lunar = Lunar.fromDate(new Date());

        I18n.setLanguage('en');
        console.log(lunar.toFullString());

        I18n.setLanguage('chs');
        console.log(lunar.toFullString());
    });

});
