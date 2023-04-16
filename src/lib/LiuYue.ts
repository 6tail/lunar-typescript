import {LiuNian} from './LiuNian';
import {LunarUtil} from './LunarUtil';

export class LiuYue {
    private readonly _index: number;
    private _liuNian: LiuNian;

    constructor(liuNian: LiuNian, index: number) {
        this._liuNian = liuNian;
        this._index = index;
    }

    getIndex(): number {
        return this._index;
    }

    getMonthInChinese(): string {
        return LunarUtil.MONTH[this._index + 1];
    }

    getGanZhi(): string {
        const yearGanIndex = LunarUtil.find(this._liuNian.getGanZhi(), LunarUtil.GAN)!.index - 1;
        const offset = [2, 4, 6, 8, 0][yearGanIndex % 5];
        const gan = LunarUtil.GAN[(this._index + offset) % 10 + 1];
        const zhi = LunarUtil.ZHI[(this._index + LunarUtil.BASE_MONTH_ZHI_INDEX) % 12 + 1];
        return gan + zhi;
    }

    getXun(): string {
        return LunarUtil.getXun(this.getGanZhi());
    }

    getXunKong(): string {
        return LunarUtil.getXunKong(this.getGanZhi());
    }
}
