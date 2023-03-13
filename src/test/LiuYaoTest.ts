import {Solar} from '../lib';
import * as assert from 'assert';

describe('六曜', () => {
    it('test1()', () => {
        const solar = Solar.fromYmd(2020,4,23);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getLiuYao(), '佛灭');
    });

    it('test2()', () => {
        const solar = Solar.fromYmd(2021,1,15);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getLiuYao(), '友引');
    });

    it('test3()', () => {
        const solar = Solar.fromYmd(2017,1,5);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getLiuYao(), '先胜');
    });

    it('test4()', () => {
        const solar = Solar.fromYmd(2020,4,10);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getLiuYao(), '友引');
    });

    it('test5()', () => {
        const solar = Solar.fromYmd(2020,6,11);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getLiuYao(), '大安');
    });

    it('test6()', () => {
        const solar = Solar.fromYmd(2020,6,1);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getLiuYao(), '先胜');
    });

    it('test7()', () => {
        const solar = Solar.fromYmd(2020,12,8);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getLiuYao(), '先负');
    });

    it('test8()', () => {
        const solar = Solar.fromYmd(2020,12,11);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getLiuYao(), '赤口');
    });

});
