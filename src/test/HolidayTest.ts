import {HolidayUtil} from '../lib';
import * as assert from 'assert';

describe('节假日', () => {
    it('test1', () => {
        assert.strictEqual(HolidayUtil.getHoliday('2020-01-01') + '', '2020-01-01 元旦节 2020-01-01');
        // 将2020-01-01修改为春节
        HolidayUtil.fix('202001011120200101');
        assert.strictEqual(HolidayUtil.getHoliday('2020-01-01') + '', '2020-01-01 春节 2020-01-01');

        // 追加2099-01-01为元旦节
        HolidayUtil.fix('209901010120990101');
        assert.strictEqual(HolidayUtil.getHoliday('2099-01-01') + '', '2099-01-01 元旦节 2099-01-01');

        // 将2020-01-01修改为春节，并追加2099-01-01为元旦节
        HolidayUtil.fix('202001011120200101209901010120990101');
        assert.strictEqual(HolidayUtil.getHoliday('2020-01-01') + '', '2020-01-01 春节 2020-01-01');
        assert.strictEqual(HolidayUtil.getHoliday('2099-01-01') + '', '2099-01-01 元旦节 2099-01-01');

        // 更改节假日名称
        let names = HolidayUtil.NAMES;
        names[0] = '元旦';
        names[1] = '大年初一';

        HolidayUtil.fix(names, '');
        assert.strictEqual(HolidayUtil.getHoliday('2020-01-01') + '', '2020-01-01 大年初一 2020-01-01');
        assert.strictEqual(HolidayUtil.getHoliday('2099-01-01') + '', '2099-01-01 元旦 2099-01-01');

        // 追加节假日名称和数据
        names = [];
        for (let i = 0, j = HolidayUtil.NAMES.length; i < j; i++) {
            names[i] = HolidayUtil.NAMES[i];
        }
        names[9] = '我的生日';
        names[10] = '结婚纪念日';
        names[11] = '她的生日';

        HolidayUtil.fix(names, '20210529912021052920211111:12021111120211201;120211201');
        assert.strictEqual(HolidayUtil.getHoliday('2021-05-29') + '', '2021-05-29 我的生日 2021-05-29');
        assert.strictEqual(HolidayUtil.getHoliday('2021-11-11') + '', '2021-11-11 结婚纪念日 2021-11-11');
        assert.strictEqual(HolidayUtil.getHoliday('2021-12-01') + '', '2021-12-01 她的生日 2021-12-01');
    });

    it('test2', () => {
        const holiday = HolidayUtil.getHoliday('2016-10-04');
        if(null==holiday){
            throw '2016-10-04';
        }
        assert.strictEqual(holiday.getTarget(), '2016-10-01');
    });

    it('test3', () => {
        let holiday = HolidayUtil.getHoliday('2010-01-01');
        if(null==holiday){
            throw '2010-01-01';
        }
        assert.strictEqual(holiday.getName(), '元旦');

        HolidayUtil.fix('20100101~000000000000000000000000000');
        holiday = HolidayUtil.getHoliday('2010-01-01');
        assert.strictEqual(holiday, null);
    });

});
