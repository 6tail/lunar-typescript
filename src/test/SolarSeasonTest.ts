import {SolarSeason} from '../lib';
import * as assert from 'assert';

describe('SolarSeason', () => {

    it('toString()', () => {
        const season = SolarSeason.fromYm(2019, 5);
        assert.strictEqual(season.toString(), '2019.2');
        assert.strictEqual(season.next(1).toString(), '2019.3');
    });

    it('toFullString()', () => {
        const season = SolarSeason.fromYm(2019, 5);
        assert.strictEqual(season.toFullString(), '2019年2季度');
        assert.strictEqual(season.next(1).toFullString(), '2019年3季度');
    });

});
