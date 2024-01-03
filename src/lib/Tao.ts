import {Lunar} from './Lunar';
import {LunarUtil} from './LunarUtil';
import {TaoUtil} from './TaoUtil';
import {TaoFestival} from './TaoFestival';
import {I18n} from './I18n';

export class Tao {
    private readonly _lunar: Lunar;

    static BIRTH_YEAR: number = -2697;

    constructor(lunar: Lunar) {
        this._lunar = lunar;
    }

    static fromLunar(lunar: Lunar): Tao {
        return new Tao(lunar);
    }

    static fromYmdHms(lunarYear: number, lunarMonth: number, lunarDay: number, hour: number, minute: number, second: number): Tao {
        return Tao.fromLunar(Lunar.fromYmdHms(lunarYear + Tao.BIRTH_YEAR, lunarMonth, lunarDay, hour, minute, second));
    }

    static fromYmd(lunarYear: number, lunarMonth: number, lunarDay: number): Tao {
        return Tao.fromYmdHms(lunarYear, lunarMonth, lunarDay, 0, 0, 0);
    }

    getLunar(): Lunar {
        return this._lunar;
    }

    getYear(): number {
        return this._lunar.getYear() - Tao.BIRTH_YEAR;
    }

    getMonth(): number {
        return this._lunar.getMonth();
    }

    getDay(): number {
        return this._lunar.getDay();
    }

    getYearInChinese(): string {
        const y = this.getYear() + '';
        let s = '';
        const zero = '0'.charCodeAt(0);
        for (let i = 0, j = y.length; i < j; i++) {
            s += LunarUtil.NUMBER[y.charCodeAt(i) - zero];
        }
        return s;
    }

    getMonthInChinese(): string {
        return this._lunar.getMonthInChinese();
    }

    getDayInChinese(): string {
        return this._lunar.getDayInChinese();
    }

    getFestivals(): TaoFestival[] {
        const l: TaoFestival[] = [];
        const fs = TaoUtil.FESTIVAL[this.getMonth() + '-' + this.getDay()];
        if (fs) {
            fs.forEach(f => {
                l.push(f);
            });
        }
        const jq = this._lunar.getJieQi();
        if (I18n.getMessage('jq.dongZhi') === jq) {
            l.push(new TaoFestival('元始天尊圣诞'));
        } else if (I18n.getMessage('jq.xiaZhi') === jq) {
            l.push(new TaoFestival('灵宝天尊圣诞'));
        }
        let f = TaoUtil.BA_JIE[jq];
        if (f) {
            l.push(new TaoFestival(f));
        }
        f = TaoUtil.BA_HUI[this._lunar.getDayInGanZhi()];
        if (f) {
            l.push(new TaoFestival(f));
        }
        return l;
    }

    private _isDayIn(days: string[]): boolean {
        const md = this.getMonth() + '-' + this.getDay();
        for (let i = 0, j = days.length; i < j; i++) {
            if (md === days[i]) {
                return true;
            }
        }
        return false;
    }

    isDaySanHui(): boolean {
        return this._isDayIn(TaoUtil.SAN_HUI);
    }

    isDaySanYuan(): boolean {
        return this._isDayIn(TaoUtil.SAN_YUAN);
    }

    isDayBaJie(): boolean {
        return !!TaoUtil.BA_JIE[this._lunar.getJieQi()];
    }

    isDayWuLa(): boolean {
        return this._isDayIn(TaoUtil.WU_LA);
    }

    isDayBaHui(): boolean {
        return !!TaoUtil.BA_HUI[this._lunar.getDayInGanZhi()];
    }

    isDayMingWu(): boolean {
        return I18n.getMessage('tg.wu') === this._lunar.getDayGan();
    }

    isDayAnWu(): boolean {
        return this._lunar.getDayZhi() === TaoUtil.AN_WU[Math.abs(this.getMonth()) - 1];
    }

    isDayWu(): boolean {
        return this.isDayMingWu() || this.isDayAnWu();
    }

    isDayTianShe(): boolean {
        let ret = false;
        const mz = this._lunar.getMonthZhi();
        const dgz = this._lunar.getDayInGanZhi();
        if ([I18n.getMessage('dz.yin'), I18n.getMessage('dz.mao'), I18n.getMessage('dz.chen')].join(',').indexOf(mz) > -1) {
            if (I18n.getMessage('jz.wuYin') === dgz) {
                ret = true;
            }
        } else if ([I18n.getMessage('dz.si'), I18n.getMessage('dz.wu'), I18n.getMessage('dz.wei')].join(',').indexOf(mz) > -1) {
            if (I18n.getMessage('jz.jiaWu') === dgz) {
                ret = true;
            }
        } else if ([I18n.getMessage('dz.shen'), I18n.getMessage('dz.you'), I18n.getMessage('dz.xu')].join(',').indexOf(mz) > -1) {
            if (I18n.getMessage('jz.wuShen') === dgz) {
                ret = true;
            }
        } else if ([I18n.getMessage('dz.hai'), I18n.getMessage('dz.zi'), I18n.getMessage('dz.chou')].join(',').indexOf(mz) > -1) {
            if (I18n.getMessage('jz.jiaZi') === dgz) {
                ret = true;
            }
        }
        return ret;
    }

    toString(): string {
        return this.getYearInChinese() + '年' + this.getMonthInChinese() + '月' + this.getDayInChinese();
    }

    toFullString(): string {
        return '道歷' + this.getYearInChinese() + '年，天運' + this._lunar.getYearInGanZhi() + '年，' + this._lunar.getMonthInGanZhi() + '月，' + this._lunar.getDayInGanZhi() + '日。' + this.getMonthInChinese() + '月' + this.getDayInChinese() + '日，' + this._lunar.getTimeZhi() + '時。';
    }
}
