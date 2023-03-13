import {Tao, Lunar} from '../lib';
import * as assert from 'assert';

describe('Tao', () => {

    it('1', () => {
        const tao = Tao.fromLunar(Lunar.fromYmdHms(2021, 10, 17, 18, 0, 0));
        assert.strictEqual(tao.toString(), '四七一八年十月十七');
        assert.strictEqual(tao.toFullString(), '道歷四七一八年，天運辛丑年，己亥月，癸酉日。十月十七日，酉時。');
    });

    it('2', () => {
        let tao = Tao.fromYmd(4718, 10, 18);
        assert.strictEqual(tao.getFestivals().toString(), '地母娘娘圣诞,四时会');

        tao = Lunar.fromYmd(2021, 10, 18).getTao();
        assert.strictEqual(tao.getFestivals().toString(), '地母娘娘圣诞,四时会');
    });

});
