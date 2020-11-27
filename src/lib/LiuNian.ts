import {DaYun} from './DaYun';
import {Lunar} from './Lunar';
import {LunarUtil} from './LunarUtil';
import {LiuYue} from './LiuYue';

export class LiuNian {
    private _year: number;
    private _age: number;
    private _index: number;
    private _daYun: DaYun;
    private _lunar: Lunar;

    constructor(daYun: DaYun, index: number) {
        this._year = daYun.getStartYear() + index;
        this._age = daYun.getStartAge() + index;
        this._index = index;
        this._daYun = daYun;
        this._lunar = daYun.getLunar();
    }

    getYear(): number {
        return this._year;
    }

    getAge(): number {
        return this._age;
    }

    getIndex(): number {
        return this._index;
    }

    getLunar(): Lunar {
        return this._lunar;
    }

    getGanZhi(): string {
        let offset = LunarUtil.getJiaZiIndex(this._lunar.getJieQiTable().get('立春').getLunar().getYearInGanZhiExact()) + this._index;
        if (this._daYun.getIndex() > 0) {
            offset += this._daYun.getStartAge() - 1;
        }
        offset %= LunarUtil.JIA_ZI.length;
        return LunarUtil.JIA_ZI[offset];
    }

    getXun(): string {
        return LunarUtil.getXun(this.getGanZhi());
    }

    getXunKong(): string {
        return LunarUtil.getXunKong(this.getGanZhi());
    }

    getLiuYue(): LiuYue[] {
        const l: LiuYue[] = [];
        for (let i = 0; i < 12; i++) {
            l.push(new LiuYue(this, i));
        }
        return l;
    }
}
