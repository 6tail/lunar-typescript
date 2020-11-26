import {Lunar} from './Lunar';
import {LunarUtil} from './LunarUtil';
import {Yun} from './Yun';
import {Dictionary} from './Dictionary';

export class EightChar {
    static MONTH_ZHI: string[] = ['', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];
    static CHANG_SHENG: string[] = ['长生', '沐浴', '冠带', '临官', '帝旺', '衰', '病', '死', '墓', '绝', '胎', '养'];

    private static CHANG_SHENG_OFFSET: Dictionary<number> = new Dictionary<number>([
        ['甲', 1],
        ['丙', 10],
        ['戊', 10],
        ['庚', 7],
        ['壬', 4],
        ['乙', 6],
        ['丁', 9],
        ['己', 9],
        ['辛', 0],
        ['癸', 3]
    ]);
    private _lunar: Lunar;

    static fromLunar(lunar: Lunar): EightChar {
        return new EightChar(lunar);
    }

    constructor(lunar: Lunar) {
        this._lunar = lunar;
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
        const v = LunarUtil.ZHI_HIDE_GAN.get(this.getYearZhi());
        return v ? v : [];
    }

    getYearWuXing(): string {
        const gan = LunarUtil.WU_XING_GAN.get(this._lunar.getYearGanExact());
        const zhi = LunarUtil.WU_XING_ZHI.get(this._lunar.getYearZhiExact());
        return gan && zhi ? gan + zhi : '';
    }

    getYearNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getYear());
        return v ? v : '';
    }

    getYearShiShenGan(): string {
        const v = LunarUtil.SHI_SHEN_GAN.get(this.getDayGan() + this.getYearGan());
        return v ? v : '';
    }

    getYearShiShenZhi(): string[] {
        const dayGan = this.getDayGan();
        const zhi = this.getYearZhi();
        const hideGan: string[] | undefined = LunarUtil.ZHI_HIDE_GAN.get(zhi);
        const l: string[] = [];
        if (hideGan) {
            for (let i = 0, j = hideGan.length; i < j; i++) {
                const v = LunarUtil.SHI_SHEN_ZHI.get(dayGan + zhi + hideGan[i]);
                if (v) {
                    l.push(v);
                }
            }
        }
        return l;
    }

    getYearDiShi(): string {
        const zhiIndex = this._lunar.getYearZhiIndexExact();
        const offset = EightChar.CHANG_SHENG_OFFSET.get(this.getDayGan());
        if (offset == undefined) {
            return '';
        }
        let index = offset + (this._lunar.getDayGanIndexExact() % 2 == 0 ? zhiIndex : -zhiIndex);
        if (index >= 12) {
            index -= 12;
        }
        if (index < 0) {
            index += 12;
        }
        return EightChar.CHANG_SHENG[index];
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
        const v = LunarUtil.ZHI_HIDE_GAN.get(this.getMonthZhi());
        return v ? v : [];
    }

    getMonthWuXing(): string {
        const gan = LunarUtil.WU_XING_GAN.get(this._lunar.getMonthGanExact());
        const zhi = LunarUtil.WU_XING_ZHI.get(this._lunar.getMonthZhiExact());
        return gan && zhi ? gan + zhi : '';
    }

    getMonthNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getMonth());
        return v ? v : '';
    }

    getMonthShiShenGan(): string {
        const v = LunarUtil.SHI_SHEN_GAN.get(this.getDayGan() + this.getMonthGan());
        return v ? v : '';
    }

    getMonthShiShenZhi(): string[] {
        const dayGan = this.getDayGan();
        const zhi = this.getMonthZhi();
        const hideGan: string[] | undefined = LunarUtil.ZHI_HIDE_GAN.get(zhi);
        const l: string[] = [];
        if (hideGan) {
            for (let i = 0, j = hideGan.length; i < j; i++) {
                const v = LunarUtil.SHI_SHEN_ZHI.get(dayGan + zhi + hideGan[i]);
                if (v) {
                    l.push(v);
                }
            }
        }
        return l;
    }

    getMonthDiShi(): string {
        const zhiIndex = this._lunar.getMonthZhiIndexExact();
        const offset = EightChar.CHANG_SHENG_OFFSET.get(this.getDayGan());
        if (offset == undefined) {
            return '';
        }
        let index = offset + (this._lunar.getDayGanIndexExact() % 2 == 0 ? zhiIndex : -zhiIndex);
        if (index >= 12) {
            index -= 12;
        }
        if (index < 0) {
            index += 12;
        }
        return EightChar.CHANG_SHENG[index];
    }

    getMonthXun(): string {
        return this._lunar.getMonthXunExact()
    }

    getMonthXunKong(): string {
        return this._lunar.getMonthXunKongExact()
    }

    getDay(): string {
        return this._lunar.getDayInGanZhiExact();
    }

    getDayGan(): string {
        return this._lunar.getDayGanExact();
    }

    getDayZhi(): string {
        return this._lunar.getDayZhiExact();
    }

    getDayHideGan(): string[] {
        const v = LunarUtil.ZHI_HIDE_GAN.get(this.getDayZhi());
        return v ? v : [];
    }

    getDayWuXing(): string {
        const gan = LunarUtil.WU_XING_GAN.get(this._lunar.getDayGanExact());
        const zhi = LunarUtil.WU_XING_ZHI.get(this._lunar.getDayZhiExact());
        return gan && zhi ? gan + zhi : '';
    }

    getDayNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getDay());
        return v ? v : '';
    }

    getDayShiShenGan(): string {
        return '日主';
    }

    getDayShiShenZhi(): string[] {
        const dayGan = this.getDayGan();
        const zhi = this.getDayZhi();
        const hideGan: string[] | undefined = LunarUtil.ZHI_HIDE_GAN.get(zhi);
        const l: string[] = [];
        if (hideGan) {
            for (let i = 0, j = hideGan.length; i < j; i++) {
                const v = LunarUtil.SHI_SHEN_ZHI.get(dayGan + zhi + hideGan[i]);
                if (v) {
                    l.push(v);
                }
            }
        }
        return l;
    }

    getDayDiShi(): string {
        const zhiIndex = this._lunar.getDayZhiIndexExact();
        const offset = EightChar.CHANG_SHENG_OFFSET.get(this.getDayGan());
        if (offset == undefined) {
            return '';
        }
        let index = offset + (this._lunar.getDayGanIndexExact() % 2 == 0 ? zhiIndex : -zhiIndex);
        if (index >= 12) {
            index -= 12;
        }
        if (index < 0) {
            index += 12;
        }
        return EightChar.CHANG_SHENG[index];
    }

    getDayXun(): string {
        return this._lunar.getDayXunExact()
    }

    getDayXunKong(): string {
        return this._lunar.getDayXunKongExact()
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
        const v = LunarUtil.ZHI_HIDE_GAN.get(this.getTimeZhi());
        return v ? v : [];
    }

    getTimeWuXing(): string {
        const gan = LunarUtil.WU_XING_GAN.get(this._lunar.getTimeGan());
        const zhi = LunarUtil.WU_XING_ZHI.get(this._lunar.getTimeZhi());
        return gan && zhi ? gan + zhi : '';
    }

    getTimeNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getTime());
        return v ? v : '';
    }

    getTimeShiShenGan(): string {
        const v = LunarUtil.SHI_SHEN_GAN.get(this.getDayGan() + this.getTimeGan());
        return v ? v : '';
    }

    getTimeShiShenZhi(): string[] {
        const dayGan = this.getDayGan();
        const zhi = this.getTimeZhi();
        const hideGan: string[] | undefined = LunarUtil.ZHI_HIDE_GAN.get(zhi);
        const l: string[] = [];
        if (hideGan) {
            for (let i = 0, j = hideGan.length; i < j; i++) {
                const v = LunarUtil.SHI_SHEN_ZHI.get(dayGan + zhi + hideGan[i]);
                if (v) {
                    l.push(v);
                }
            }
        }
        return l;
    }

    getTimeDiShi(): string {
        const zhiIndex = this._lunar.getTimeZhiIndex();
        const offset = EightChar.CHANG_SHENG_OFFSET.get(this.getDayGan());
        if (offset == undefined) {
            return '';
        }
        let index = offset + (this._lunar.getDayGanIndexExact() % 2 == 0 ? zhiIndex : -zhiIndex);
        if (index >= 12) {
            index -= 12;
        }
        if (index < 0) {
            index += 12;
        }
        return EightChar.CHANG_SHENG[index];
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
        const v = LunarUtil.NAYIN.get(this.getTaiYuan());
        return v ? v : '';
    }

    getMingGong() {
        let monthZhiIndex = 0;
        let timeZhiIndex = 0;
        for (let i = 0, j = EightChar.MONTH_ZHI.length; i < j; i++) {
            let zhi = EightChar.MONTH_ZHI[i];
            if (this._lunar.getMonthZhiExact() === zhi) {
                monthZhiIndex = i;
            }
            if (this._lunar.getTimeZhi() === zhi) {
                timeZhiIndex = i;
            }
        }
        let zhiIndex = 26 - (monthZhiIndex + timeZhiIndex);
        if (zhiIndex > 12) {
            zhiIndex -= 12;
        }
        let jiaZiIndex = LunarUtil.getJiaZiIndex(this._lunar.getMonthInGanZhiExact()) - (monthZhiIndex - zhiIndex);
        if (jiaZiIndex >= 60) {
            jiaZiIndex -= 60;
        }
        if (jiaZiIndex < 0) {
            jiaZiIndex += 60;
        }
        return LunarUtil.JIA_ZI[jiaZiIndex];
    }

    getMingGongNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getMingGong());
        return v ? v : '';
    }

    getShenGong(): string {
        let monthZhiIndex = 0;
        let timeZhiIndex = 0;
        for (let i = 0, j = EightChar.MONTH_ZHI.length; i < j; i++) {
            let zhi = EightChar.MONTH_ZHI[i];
            if (this._lunar.getMonthZhiExact() === zhi) {
                monthZhiIndex = i;
            }
            if (this._lunar.getTimeZhi() === zhi) {
                timeZhiIndex = i;
            }
        }
        let zhiIndex = (2 + (monthZhiIndex + timeZhiIndex)) % 12;
        let jiaZiIndex = LunarUtil.getJiaZiIndex(this._lunar.getMonthInGanZhiExact()) - (monthZhiIndex - zhiIndex);
        if (jiaZiIndex >= 60) {
            jiaZiIndex -= 60;
        }
        if (jiaZiIndex < 0) {
            jiaZiIndex += 60;
        }
        return LunarUtil.JIA_ZI[jiaZiIndex];
    }

    getShenGongNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getShenGong());
        return v ? v : '';
    }

    getLunar(): Lunar {
        return this._lunar;
    }

    getYun(gender: number) {
        return new Yun(this._lunar,gender);
    }

    toString():string {
        return this.getYear() + ' ' + this.getMonth() + ' ' + this.getDay() + ' ' + this.getTime();
    }
}
