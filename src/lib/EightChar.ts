import {Lunar} from './Lunar';
import {LunarUtil} from './LunarUtil';
import {Yun} from './Yun';

export class EightChar {
    private _sect: number = 2;
    private readonly _lunar: Lunar;

    static fromLunar(lunar: Lunar): EightChar {
        return new EightChar(lunar);
    }

    constructor(lunar: Lunar) {
        this._lunar = lunar;
    }

    getSect(): number {
        return this._sect;
    }

    setSect(sect: number) {
        this._sect = (1 == sect) ? 1 : 2;
    }

    getDayGanIndex(): number {
        return 2 === this._sect ? this._lunar.getDayGanIndexExact2() : this._lunar.getDayGanIndexExact();
    }

    getDayZhiIndex(): number {
        return 2 === this._sect ? this._lunar.getDayZhiIndexExact2() : this._lunar.getDayZhiIndexExact();
    }

    getYear(): string {
        return this._lunar.getYearInGanZhiExact();
    }

    getYearGan(): string {
        return this._lunar.getYearGanExact();
    }

    getYearZhi(): string {
        return this._lunar.getYearZhiExact();
    }

    getYearHideGan(): string[] {
        const v = LunarUtil.ZHI_HIDE_GAN[this.getYearZhi()];
        return v ? v : [];
    }

    getYearWuXing(): string {
        const gan = LunarUtil.WU_XING_GAN[this.getYearGan()];
        const zhi = LunarUtil.WU_XING_ZHI[this.getYearZhi()];
        return gan && zhi ? gan + zhi : '';
    }

    getYearNaYin(): string {
        const v = LunarUtil.NAYIN[this.getYear()];
        return v ? v : '';
    }

    getYearShiShenGan(): string {
        const v = LunarUtil.SHI_SHEN[this.getDayGan() + this.getYearGan()];
        return v ? v : '';
    }

    getYearShiShenZhi(): string[] {
        const dayGan = this.getDayGan();
        const hideGan: string[] | undefined = LunarUtil.ZHI_HIDE_GAN[this.getYearZhi()];
        const l: string[] = [];
        if (hideGan) {
            for (let i = 0, j = hideGan.length; i < j; i++) {
                const v = LunarUtil.SHI_SHEN[dayGan + hideGan[i]];
                if (v) {
                    l.push(v);
                }
            }
        }
        return l;
    }

    getDiShi(zhiIndex: number): string {
        const offset = LunarUtil.CHANG_SHENG_OFFSET[this.getDayGan()];
        if (offset == undefined) {
            return '';
        }
        let index = offset + (this.getDayGanIndex() % 2 == 0 ? zhiIndex : -zhiIndex);
        if (index >= 12) {
            index -= 12;
        }
        if (index < 0) {
            index += 12;
        }
        return LunarUtil.CHANG_SHENG[index];
    }

    getYearDiShi(): string {
        return this.getDiShi(this._lunar.getYearZhiIndexExact());
    }

    getYearXun(): string {
        return this._lunar.getYearXunExact()
    }

    getYearXunKong(): string {
        return this._lunar.getYearXunKongExact()
    }

    getMonth(): string {
        return this._lunar.getMonthInGanZhiExact();
    }

    getMonthGan(): string {
        return this._lunar.getMonthGanExact();
    }

    getMonthZhi(): string {
        return this._lunar.getMonthZhiExact();
    }

    getMonthHideGan(): string[] {
        const v = LunarUtil.ZHI_HIDE_GAN[this.getMonthZhi()];
        return v ? v : [];
    }

    getMonthWuXing(): string {
        const gan = LunarUtil.WU_XING_GAN[this.getMonthGan()];
        const zhi = LunarUtil.WU_XING_ZHI[this.getMonthZhi()];
        return gan && zhi ? gan + zhi : '';
    }

    getMonthNaYin(): string {
        const v = LunarUtil.NAYIN[this.getMonth()];
        return v ? v : '';
    }

    getMonthShiShenGan(): string {
        const v = LunarUtil.SHI_SHEN[this.getDayGan() + this.getMonthGan()];
        return v ? v : '';
    }

    getMonthShiShenZhi(): string[] {
        const dayGan = this.getDayGan();
        const hideGan: string[] | undefined = LunarUtil.ZHI_HIDE_GAN[this.getMonthZhi()];
        const l: string[] = [];
        if (hideGan) {
            for (let i = 0, j = hideGan.length; i < j; i++) {
                const v = LunarUtil.SHI_SHEN[dayGan + hideGan[i]];
                if (v) {
                    l.push(v);
                }
            }
        }
        return l;
    }

    getMonthDiShi(): string {
        return this.getDiShi(this._lunar.getMonthZhiIndexExact());
    }

    getMonthXun(): string {
        return this._lunar.getMonthXunExact()
    }

    getMonthXunKong(): string {
        return this._lunar.getMonthXunKongExact()
    }

    getDay(): string {
        return 2 === this._sect ? this._lunar.getDayInGanZhiExact2() : this._lunar.getDayInGanZhiExact();
    }

    getDayGan(): string {
        return 2 === this._sect ? this._lunar.getDayGanExact2() : this._lunar.getDayGanExact();
    }

    getDayZhi(): string {
        return 2 === this._sect ? this._lunar.getDayZhiExact2() : this._lunar.getDayZhiExact();
    }

    getDayHideGan(): string[] {
        const v = LunarUtil.ZHI_HIDE_GAN[this.getDayZhi()];
        return v ? v : [];
    }

    getDayWuXing(): string {
        const gan = LunarUtil.WU_XING_GAN[this.getDayGan()];
        const zhi = LunarUtil.WU_XING_ZHI[this.getDayZhi()];
        return gan && zhi ? gan + zhi : '';
    }

    getDayNaYin(): string {
        const v = LunarUtil.NAYIN[this.getDay()];
        return v ? v : '';
    }

    getDayShiShenGan(): string {
        return '日主';
    }

    getDayShiShenZhi(): string[] {
        const dayGan = this.getDayGan();
        const hideGan: string[] | undefined = LunarUtil.ZHI_HIDE_GAN[this.getDayZhi()];
        const l: string[] = [];
        if (hideGan) {
            for (let i = 0, j = hideGan.length; i < j; i++) {
                const v = LunarUtil.SHI_SHEN[dayGan + hideGan[i]];
                if (v) {
                    l.push(v);
                }
            }
        }
        return l;
    }

    getDayDiShi(): string {
        return this.getDiShi(this.getDayZhiIndex());
    }

    getDayXun(): string {
        return (2 === this._sect) ? this._lunar.getDayXunExact2() : this._lunar.getDayXunExact();
    }

    getDayXunKong(): string {
        return (2 === this._sect) ? this._lunar.getDayXunKongExact2() : this._lunar.getDayXunKongExact();
    }

    getTime(): string {
        return this._lunar.getTimeInGanZhi();
    }

    getTimeGan(): string {
        return this._lunar.getTimeGan();
    }

    getTimeZhi(): string {
        return this._lunar.getTimeZhi();
    }

    getTimeHideGan(): string[] {
        const v = LunarUtil.ZHI_HIDE_GAN[this.getTimeZhi()];
        return v ? v : [];
    }

    getTimeWuXing(): string {
        const gan = LunarUtil.WU_XING_GAN[this._lunar.getTimeGan()];
        const zhi = LunarUtil.WU_XING_ZHI[this._lunar.getTimeZhi()];
        return gan && zhi ? gan + zhi : '';
    }

    getTimeNaYin(): string {
        const v = LunarUtil.NAYIN[this.getTime()];
        return v ? v : '';
    }

    getTimeShiShenGan(): string {
        const v = LunarUtil.SHI_SHEN[this.getDayGan() + this.getTimeGan()];
        return v ? v : '';
    }

    getTimeShiShenZhi(): string[] {
        const dayGan = this.getDayGan();
        const hideGan: string[] | undefined = LunarUtil.ZHI_HIDE_GAN[this.getTimeZhi()];
        const l: string[] = [];
        if (hideGan) {
            for (let i = 0, j = hideGan.length; i < j; i++) {
                const v = LunarUtil.SHI_SHEN[dayGan + hideGan[i]];
                if (v) {
                    l.push(v);
                }
            }
        }
        return l;
    }

    getTimeDiShi(): string {
        return this.getDiShi(this._lunar.getTimeZhiIndex());
    }

    getTimeXun(): string {
        return this._lunar.getTimeXun();
    }

    getTimeXunKong(): string {
        return this._lunar.getTimeXunKong();
    }

    getTaiYuan(): string {
        let ganIndex = this._lunar.getMonthGanIndexExact() + 1;
        if (ganIndex >= 10) {
            ganIndex -= 10;
        }
        let zhiIndex = this._lunar.getMonthZhiIndexExact() + 3;
        if (zhiIndex >= 12) {
            zhiIndex -= 12;
        }
        return LunarUtil.GAN[ganIndex + 1] + LunarUtil.ZHI[zhiIndex + 1];
    }

    getTaiYuanNaYin(): string {
        const v = LunarUtil.NAYIN[this.getTaiYuan()];
        return v ? v : '';
    }

    getTaiXi(): string {
        const ganIndex = (2 == this._sect) ? this._lunar.getDayGanIndexExact2() : this._lunar.getDayGanIndexExact();
        const zhiIndex = (2 == this._sect) ? this._lunar.getDayZhiIndexExact2() : this._lunar.getDayZhiIndexExact();
        return LunarUtil.HE_GAN_5[ganIndex] + LunarUtil.HE_ZHI_6[zhiIndex];
    }

    getTaiXiNaYin(): string {
        const v = LunarUtil.NAYIN[this.getTaiXi()];
        return v ? v : '';
    }

    getMingGong() {
        const monthZhiIndex = LunarUtil.find(this.getMonthZhi(), LunarUtil.MONTH_ZHI)!.index;
        const timeZhiIndex = LunarUtil.find(this.getTimeZhi(), LunarUtil.MONTH_ZHI)!.index;
        let offset = monthZhiIndex + timeZhiIndex;
        offset = (offset >= 14 ? 26 : 14) - offset;
        let ganIndex = (this._lunar.getYearGanIndexExact() + 1) * 2 + offset;
        while (ganIndex > 10) {
            ganIndex -= 10;
        }
        return LunarUtil.GAN[ganIndex] + LunarUtil.MONTH_ZHI[offset];
    }

    getMingGongNaYin(): string {
        const v = LunarUtil.NAYIN[this.getMingGong()];
        return v ? v : '';
    }

    getShenGong(): string {
        const monthZhiIndex = LunarUtil.find(this.getMonthZhi(), LunarUtil.MONTH_ZHI)!.index;
        const timeZhiIndex = LunarUtil.find(this.getTimeZhi(), LunarUtil.ZHI)!.index;
        let offset = monthZhiIndex + timeZhiIndex;
        if (offset > 12) {
            offset -= 12;
        }
        let ganIndex = (this._lunar.getYearGanIndexExact() + 1) * 2 + offset;
        while (ganIndex > 10) {
            ganIndex -= 10;
        }
        return LunarUtil.GAN[ganIndex] + LunarUtil.MONTH_ZHI[offset];
    }

    getShenGongNaYin(): string {
        const v = LunarUtil.NAYIN[this.getShenGong()];
        return v ? v : '';
    }

    getLunar(): Lunar {
        return this._lunar;
    }

    getYun(gender: number, sect: number = 1) {
        return new Yun(this._lunar, gender, sect);
    }

    toString(): string {
        return this.getYear() + ' ' + this.getMonth() + ' ' + this.getDay() + ' ' + this.getTime();
    }
}
