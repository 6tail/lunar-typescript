import {Foto, Lunar} from '../lib';
import * as assert from 'assert';

describe('Foto', () => {

    it('toString()', () => {
        const foto = Foto.fromLunar(Lunar.fromYmd(2021, 10, 14));
        assert.strictEqual(foto.toFullString(), '二五六五年十月十四 (三元降) (四天王巡行)');
    });

    it('test1', () => {
        const foto = Foto.fromLunar(Lunar.fromYmd(2020, 4, 13));
        assert.strictEqual(foto.getXiu(), '氐');
        assert.strictEqual(foto.getZheng(), '土');
        assert.strictEqual(foto.getAnimal(), '貉');
        assert.strictEqual(foto.getGong(), '东');
        assert.strictEqual(foto.getShou(), '青龙');
    });

});
