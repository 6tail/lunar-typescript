import {Solar} from '../lib';
import * as assert from 'assert';

describe('星座', () => {
    it('test1()', () => {
        let solar = Solar.fromYmd(2020, 3, 21);
        assert.strictEqual(solar.getXingZuo(), '白羊');
        solar = Solar.fromYmd(2020, 4, 19);
        assert.strictEqual(solar.getXingZuo(), '白羊');
    });

    it('test2()', () => {
        let solar = Solar.fromYmd(2020, 4, 20);
        assert.strictEqual(solar.getXingZuo(), '金牛');
        solar = Solar.fromYmd(2020, 5, 20);
        assert.strictEqual(solar.getXingZuo(), '金牛');
    });

    it('test3()', () => {
        let solar = Solar.fromYmd(2020, 5, 21);
        assert.strictEqual(solar.getXingZuo(), '双子');
        solar = Solar.fromYmd(2020, 6, 21);
        assert.strictEqual(solar.getXingZuo(), '双子');
    });

    it('test4()', () => {
        let solar = Solar.fromYmd(2020, 6, 22);
        assert.strictEqual(solar.getXingZuo(), '巨蟹');
        solar = Solar.fromYmd(2020, 7, 22);
        assert.strictEqual(solar.getXingZuo(), '巨蟹');
    });

    it('test5()', () => {
        let solar = Solar.fromYmd(2020, 7, 23);
        assert.strictEqual(solar.getXingZuo(), '狮子');
        solar = Solar.fromYmd(2020, 8, 22);
        assert.strictEqual(solar.getXingZuo(), '狮子');
    });

    it('test6()', () => {
        let solar = Solar.fromYmd(2020, 8, 23);
        assert.strictEqual(solar.getXingZuo(), '处女');
        solar = Solar.fromYmd(2020, 9, 22);
        assert.strictEqual(solar.getXingZuo(), '处女');
    });

    it('test7()', () => {
        let solar = Solar.fromYmd(2020, 9, 23);
        assert.strictEqual(solar.getXingZuo(), '天秤');
        solar = Solar.fromYmd(2020, 10, 23);
        assert.strictEqual(solar.getXingZuo(), '天秤');
    });

    it('test8()', () => {
        let solar = Solar.fromYmd(2020, 10, 24);
        assert.strictEqual(solar.getXingZuo(), '天蝎');
        solar = Solar.fromYmd(2020, 11, 22);
        assert.strictEqual(solar.getXingZuo(), '天蝎');
    });

    it('test9()', () => {
        let solar = Solar.fromYmd(2020, 11, 23);
        assert.strictEqual(solar.getXingZuo(), '射手');
        solar = Solar.fromYmd(2020, 12, 21);
        assert.strictEqual(solar.getXingZuo(), '射手');
    });

    it('test10()', () => {
        let solar = Solar.fromYmd(2020, 12, 22);
        assert.strictEqual(solar.getXingZuo(), '摩羯');
        solar = Solar.fromYmd(2021, 1, 19);
        assert.strictEqual(solar.getXingZuo(), '摩羯');
    });

    it('test11()', () => {
        let solar = Solar.fromYmd(2021, 1, 20);
        assert.strictEqual(solar.getXingZuo(), '水瓶');
        solar = Solar.fromYmd(2021, 2, 18);
        assert.strictEqual(solar.getXingZuo(), '水瓶');
    });

    it('test12()', () => {
        let solar = Solar.fromYmd(2021, 2, 19);
        assert.strictEqual(solar.getXingZuo(), '双鱼');
        solar = Solar.fromYmd(2021, 3, 20);
        assert.strictEqual(solar.getXingZuo(), '双鱼');
    });

});
