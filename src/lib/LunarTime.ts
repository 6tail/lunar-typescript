import {LunarUtil} from './LunarUtil';
import {Lunar} from './Lunar';
import {NineStar} from './NineStar';
import {I18n} from './I18n';

export class LunarTime {

    private readonly _ganIndex: number;
    private readonly _zhiIndex: number;
    private _lunar: Lunar;

    static fromYmdHms(lunarYear: number, lunarMonth: number, lunarDay: number, hour: number, minute: number, second: number): LunarTime {
        return new LunarTime(lunarYear, lunarMonth, lunarDay, hour, minute, second);
    }

    constructor(lunarYear: number, lunarMonth: number, lunarDay: number, hour: number, minute: number, second: number) {
        this._lunar = Lunar.fromYmdHms(lunarYear, lunarMonth, lunarDay, hour, minute, second);
        this._zhiIndex = LunarUtil.getTimeZhiIndex([(hour < 10 ? '0' : '') + hour, (minute < 10 ? '0' : '') + minute].join(':'));
        this._ganIndex = (this._lunar.getDayGanIndexExact() % 5 * 2 + this._zhiIndex) % 10;
    }

    getGanIndex(): number {
        return this._ganIndex;
    }

    getZhiIndex(): number {
        return this._zhiIndex;
    }

    getGan(): string {
        return LunarUtil.GAN[this._ganIndex + 1];
    }

    getZhi(): string {
        return LunarUtil.ZHI[this._zhiIndex + 1];
    }

    getGanZhi(): string {
        return this.getGan() + this.getZhi();
    }

    getShengXiao(): string {
        return LunarUtil.SHENGXIAO[this._zhiIndex + 1];
    }

    getPositionXi(): string {
        return LunarUtil.POSITION_XI[this._ganIndex + 1];
    }

    getPositionXiDesc(): string {
        return LunarUtil.POSITION_DESC[this.getPositionXi()];
    }

    getPositionYangGui(): string {
        return LunarUtil.POSITION_YANG_GUI[this._ganIndex + 1];
    }

    getPositionYangGuiDesc(): string {
        return LunarUtil.POSITION_DESC[this.getPositionYangGui()];
    }

    getPositionYinGui(): string {
        return LunarUtil.POSITION_YIN_GUI[this._ganIndex + 1];
    }

    getPositionYinGuiDesc(): string {
        return LunarUtil.POSITION_DESC[this.getPositionYinGui()];
    }

    getPositionFu(sect: number = 2): string {
        return (1 === sect ? LunarUtil.POSITION_FU : LunarUtil.POSITION_FU_2)[this._ganIndex + 1];
    }

    getPositionFuDesc(sect: number = 2): string {
        return LunarUtil.POSITION_DESC[this.getPositionFu(sect)];
    }

    getPositionCai(): string {
        return LunarUtil.POSITION_CAI[this._ganIndex + 1];
    }

    getPositionCaiDesc(): string {
        return LunarUtil.POSITION_DESC[this.getPositionCai()];
    }

    getNaYin(): string {
        return LunarUtil.NAYIN[this.getGanZhi()];
    }

    getTianShen(): string {
        return LunarUtil.TIAN_SHEN[(this._zhiIndex + LunarUtil.ZHI_TIAN_SHEN_OFFSET[this._lunar.getDayZhiExact()]) % 12 + 1];
    }

    getTianShenType(): string {
        return LunarUtil.TIAN_SHEN_TYPE[this.getTianShen()];
    }

    getTianShenLuck(): string {
        return LunarUtil.TIAN_SHEN_TYPE_LUCK[this.getTianShenType()];
    }

    getChong(): string {
        return LunarUtil.CHONG[this._zhiIndex];
    }

    getSha(): string {
        return LunarUtil.SHA[this.getZhi()];
    }

    getChongShengXiao(): string {
        const chong = this.getChong();
        for (let i = 0, j = LunarUtil.ZHI.length; i < j; i++) {
            if (LunarUtil.ZHI[i] === chong) {
                return LunarUtil.SHENGXIAO[i];
            }
        }
        return '';
    }

    getChongDesc(): string {
        return '(' + this.getChongGan() + this.getChong() + ')' + this.getChongShengXiao();
    }

    getChongGan(): string {
        return LunarUtil.CHONG_GAN[this._ganIndex];
    }

    getChongGanTie(): string {
        return LunarUtil.CHONG_GAN_TIE[this._ganIndex];
    }

    getYi(): string[] {
        return LunarUtil.getTimeYi(this._lunar.getDayInGanZhiExact(), this.getGanZhi());
    }

    getJi(): string[] {
        return LunarUtil.getTimeJi(this._lunar.getDayInGanZhiExact(), this.getGanZhi());
    }

    getNineStar(): NineStar {
        const solarYmd = this._lunar.getSolar().toYmd();
        const jieQi = this._lunar.getJieQiTable();
        let asc = false;
        if (solarYmd >= jieQi[I18n.getMessage('jq.dongZhi')].toYmd() && solarYmd < jieQi[I18n.getMessage('jq.xiaZhi')].toYmd()) {
            asc = true;
        }
        const offset = asc ? [0, 3, 6] : [8, 5, 2];
        const start = offset[this._lunar.getDayZhiIndex() % 3];
        const index = asc ? (start + this._zhiIndex) : (start + 9 - this._zhiIndex);
        return NineStar.fromIndex(index % 9);
    }

    getXun(): string {
        return LunarUtil.getXun(this.getGanZhi());
    }

    getXunKong(): string {
        return LunarUtil.getXunKong(this.getGanZhi());
    }

    getMinHm(): string {
        let hour = this._lunar.getHour();
        if (hour < 1) {
            return '00:00';
        } else if (hour > 22) {
            return '23:00';
        }
        if (hour % 2 === 0) {
            hour -= 1;
        }
        return (hour < 10 ? '0' : '') + hour + ':00';
    }

    getMaxHm(): string {
        let hour = this._lunar.getHour();
        if (hour < 1) {
            return '00:59';
        } else if (hour > 22) {
            return '23:59';
        }
        if (hour % 2 !== 0) {
            hour += 1;
        }
        return (hour < 10 ? '0' : '') + hour + ':59';
    }

    toString(): string {
        return this.getGanZhi();
    }
}
