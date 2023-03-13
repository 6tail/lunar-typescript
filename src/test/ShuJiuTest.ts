import {Solar} from '../lib';
import * as assert from 'assert';

describe('数九', () => {
    it('test1()', () => {
        const solar = Solar.fromYmd(2020,12,21);
        const lunar = solar.getLunar();
        const shuJiu = lunar.getShuJiu();
        if(null==shuJiu){
            throw solar.toYmd();
        }
        assert.strictEqual(shuJiu.toString(), '一九');
        assert.strictEqual(shuJiu.toFullString(), '一九第1天');
    });

    it('test2()', () => {
        const solar = Solar.fromYmd(2020,12,22);
        const lunar = solar.getLunar();
        const shuJiu = lunar.getShuJiu();
        if(null==shuJiu){
            throw solar.toYmd();
        }
        assert.strictEqual(shuJiu.toString(), '一九');
        assert.strictEqual(shuJiu.toFullString(), '一九第2天');
    });

    it('test3()', () => {
        const solar = Solar.fromYmd(2020,1,7);
        const lunar = solar.getLunar();
        const shuJiu = lunar.getShuJiu();
        if(null==shuJiu){
            throw solar.toYmd();
        }
        assert.strictEqual(shuJiu.toString(), '二九');
        assert.strictEqual(shuJiu.toFullString(), '二九第8天');
    });

    it('test4()', () => {
        const solar = Solar.fromYmd(2021,1,6);
        const lunar = solar.getLunar();
        const shuJiu = lunar.getShuJiu();
        if(null==shuJiu){
            throw solar.toYmd();
        }
        assert.strictEqual(shuJiu.toString(), '二九');
        assert.strictEqual(shuJiu.toFullString(), '二九第8天');
    });

    it('test5()', () => {
        const solar = Solar.fromYmd(2021,1,8);
        const lunar = solar.getLunar();
        const shuJiu = lunar.getShuJiu();
        if(null==shuJiu){
            throw solar.toYmd();
        }
        assert.strictEqual(shuJiu.toString(), '三九');
        assert.strictEqual(shuJiu.toFullString(), '三九第1天');
    });

    it('test6()', () => {
        const solar = Solar.fromYmd(2021,3,5);
        const lunar = solar.getLunar();
        const shuJiu = lunar.getShuJiu();
        if(null==shuJiu){
            throw solar.toYmd();
        }
        assert.strictEqual(shuJiu.toString(), '九九');
        assert.strictEqual(shuJiu.toFullString(), '九九第3天');
    });

    it('test7()', () => {
        const solar = Solar.fromYmd(2021,7,5);
        const lunar = solar.getLunar();
        const shuJiu = lunar.getShuJiu();
        assert.strictEqual(shuJiu, null);
    });
});
