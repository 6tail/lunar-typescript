import {Solar} from '../lib';
import * as assert from 'assert';

describe('三伏', () => {
    it('test1()', () => {
        const solar = Solar.fromYmd(2011,7,14);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '初伏');
        assert.strictEqual(fu.toFullString(), '初伏第1天');
    });

    it('test2()', () => {
        const solar = Solar.fromYmd(2011,7,23);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '初伏');
        assert.strictEqual(fu.toFullString(), '初伏第10天');
    });

    it('test3()', () => {
        const solar = Solar.fromYmd(2011,7,24);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '中伏');
        assert.strictEqual(fu.toFullString(), '中伏第1天');
    });

    it('test4()', () => {
        const solar = Solar.fromYmd(2011,8,12);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '中伏');
        assert.strictEqual(fu.toFullString(), '中伏第20天');
    });

    it('test5()', () => {
        const solar = Solar.fromYmd(2011,8,13);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '末伏');
        assert.strictEqual(fu.toFullString(), '末伏第1天');
    });

    it('test6()', () => {
        const solar = Solar.fromYmd(2011,8,22);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '末伏');
        assert.strictEqual(fu.toFullString(), '末伏第10天');
    });

    it('test7()', () => {
        const solar = Solar.fromYmd(2011,7,13);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        assert.strictEqual(fu, null);
    });

    it('test8()', () => {
        const solar = Solar.fromYmd(2011,8,23);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        assert.strictEqual(fu, null);
    });

    it('test9()', () => {
        const solar = Solar.fromYmd(2012,7,18);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '初伏');
        assert.strictEqual(fu.toFullString(), '初伏第1天');
    });

    it('test10()', () => {
        const solar = Solar.fromYmd(2012,8,5);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '中伏');
        assert.strictEqual(fu.toFullString(), '中伏第9天');
    });

    it('test11()', () => {
        const solar = Solar.fromYmd(2012,8,8);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '末伏');
        assert.strictEqual(fu.toFullString(), '末伏第2天');
    });

    it('test12()', () => {
        const solar = Solar.fromYmd(2020,7,17);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '初伏');
        assert.strictEqual(fu.toFullString(), '初伏第2天');
    });

    it('test13()', () => {
        const solar = Solar.fromYmd(2020,7,26);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '中伏');
        assert.strictEqual(fu.toFullString(), '中伏第1天');
    });

    it('test14()', () => {
        const solar = Solar.fromYmd(2020,8,24);
        const lunar = solar.getLunar();
        const fu = lunar.getFu();
        if(null==fu){
            throw solar.toYmd();
        }
        assert.strictEqual(fu.toString(), '末伏');
        assert.strictEqual(fu.toFullString(), '末伏第10天');
    });

});
