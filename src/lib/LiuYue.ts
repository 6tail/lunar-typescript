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
        let offset = 0;
        const yearGan = this._liuNian.getGanZhi().substr(0, 1);
        if ('甲' === yearGan || '己' === yearGan) {
            offset = 2;
        } else if ('乙' === yearGan || '庚' === yearGan) {
            offset = 4;
        } else if ('丙' === yearGan || '辛' === yearGan) {
            offset = 6;
        } else if ('丁' === yearGan || '壬' === yearGan) {
            offset = 8;
        }
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
