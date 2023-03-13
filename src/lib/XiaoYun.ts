import {DaYun} from './DaYun';
import {Lunar} from './Lunar';
import {LunarUtil} from './LunarUtil';

export class XiaoYun {
    private readonly _year: number;
    private readonly _age: number;
    private readonly _index: number;
    private _daYun: DaYun;
    private _lunar: Lunar;
    private readonly _forward: boolean;

    constructor(daYun: DaYun, index: number, forward: boolean) {
        this._year = daYun.getStartYear() + index;
        this._age = daYun.getStartAge() + index;
        this._index = index;
        this._daYun = daYun;
        this._lunar = daYun.getLunar();
        this._forward = forward;
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

    getGanZhi(): string {
        let offset = LunarUtil.getJiaZiIndex(this._lunar.getTimeInGanZhi());
        let add = this._index + 1;
        if (this._daYun.getIndex() > 0) {
            add += this._daYun.getStartAge() - 1;
        }
        offset += this._forward ? add : -add;
        const size = LunarUtil.JIA_ZI.length;
        while (offset < 0) {
            offset += size;
        }
        offset %= size;
        return LunarUtil.JIA_ZI[offset];
    }

    getXun(): string {
        return LunarUtil.getXun(this.getGanZhi());
    }

    getXunKong(): string {
        return LunarUtil.getXunKong(this.getGanZhi());
    }
}
