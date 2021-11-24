import {Foto, Lunar} from '../lib';

const assert = require('assert');

describe('Foto', () => {

    it('toString()', () => {
        const foto = Foto.fromLunar(Lunar.fromYmd(2021, 10, 14));
        assert.strictEqual(foto.toFullString(), '二五六五年十月十四 (三元降) (四天王巡行)');
    });

});
