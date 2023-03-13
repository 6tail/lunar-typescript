import {Lunar, Solar} from '../lib';
import * as assert from 'assert';

describe('NineStar', () => {

    it('test1', () => {
        const solar = Solar.fromYmd(1985, 2, 19);
        const lunar = solar.getLunar();
        assert.strictEqual(lunar.getYearNineStar().getNumber(), '六');
    });

    it('test2', () => {
        const lunar = Lunar.fromYmd(2022, 1, 1);
        assert.strictEqual(lunar.getYearNineStar().toString(), '六白金开阳');
    });

    it('test3', () => {
        const lunar = Lunar.fromYmd(2033, 1, 1);
        assert.strictEqual(lunar.getYearNineStar().toString(), '四绿木天权');
    });

});
