import {Solar} from '../lib';
import * as assert from 'assert';

describe('物候', () => {
    it('test1()', () => {
        const solar = Solar.fromYmd(2020,4,23);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '萍始生');
    });

    it('test2()', () => {
        const solar = Solar.fromYmd(2021,1,15);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '雉始雊');
    });

    it('test3()', () => {
        const solar = Solar.fromYmd(2017,1,5);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '雁北乡');
    });

    it('test4()', () => {
        const solar = Solar.fromYmd(2020,4,10);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '田鼠化为鴽');
    });

    it('test5()', () => {
        const solar = Solar.fromYmd(2020,6,11);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '鵙始鸣');
    });

    it('test6()', () => {
        const solar = Solar.fromYmd(2020,6,1);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '麦秋至');
    });

    it('test7()', () => {
        const solar = Solar.fromYmd(2020,12,8);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '鹖鴠不鸣');
    });

    it('test8()', () => {
        const solar = Solar.fromYmd(2020,12,11);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '鹖鴠不鸣');
    });

    it('test9()', () => {
        const solar = Solar.fromYmd(1982,12,22);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '蚯蚓结');
    });

    it('test10()', () => {
        const solar = Solar.fromYmd(2021, 12, 21);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getHou(), '冬至 初候');
    });

    it('test11()', () => {
        const solar = Solar.fromYmd(2021, 12, 26);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getHou(), '冬至 二候');
    });

    it('test12()', () => {
        const solar = Solar.fromYmd(2021, 12, 31);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getHou(), '冬至 三候');
    });

    it('test13()', () => {
        const solar = Solar.fromYmd(2022, 1, 5);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getHou(), '小寒 初候');
    });

    it('test15()', () => {
        const solar = Solar.fromYmd(2022, 8, 22);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '寒蝉鸣');
    });

    it('test16()', () => {
        const solar = Solar.fromYmd(2022, 8, 23);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getWuHou(), '鹰乃祭鸟');
    });

});
