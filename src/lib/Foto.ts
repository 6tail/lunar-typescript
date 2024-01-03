import {Lunar} from './Lunar';
import {LunarUtil} from './LunarUtil';
import {FotoUtil} from './FotoUtil';
import {LunarMonth} from './LunarMonth';
import {FotoFestival} from './FotoFestival';

export class Foto {
    private readonly _lunar: Lunar;

    static DEAD_YEAR: number = -543;

    constructor(lunar: Lunar) {
        this._lunar = lunar;
    }

    static fromLunar(lunar: Lunar): Foto {
        return new Foto(lunar);
    }

    static fromYmdHms(lunarYear: number, lunarMonth: number, lunarDay: number, hour: number, minute: number, second: number): Foto {
        return Foto.fromLunar(Lunar.fromYmdHms(lunarYear + Foto.DEAD_YEAR - 1, lunarMonth, lunarDay, hour, minute, second));
    }

    static fromYmd(lunarYear: number, lunarMonth: number, lunarDay: number): Foto {
        return Foto.fromYmdHms(lunarYear, lunarMonth, lunarDay, 0, 0, 0);
    }

    getLunar(): Lunar {
        return this._lunar;
    }

    getYear(): number {
        const sy = this._lunar.getSolar().getYear();
        let y = sy - Foto.DEAD_YEAR;
        if (sy === this._lunar.getYear()) {
            y++;
        }
        return y;
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

    getFestivals(): FotoFestival[] {
        const l = FotoUtil.FESTIVAL[this.getMonth() + '-' + this.getDay()];
        return l ? l : [];
    }

    getOtherFestivals(): string[] {
        const l: string[] = [];
        const fs = FotoUtil.OTHER_FESTIVAL[this.getMonth() + '-' + this.getDay()];
        if (fs) {
            fs.forEach(f => {
                l.push(f);
            });
        }
        return l;
    }

    isMonthZhai(): boolean {
        const m = this.getMonth();
        return 1 === m || 5 === m || 9 === m;
    }

    isDayYangGong(): boolean {
        const l = this.getFestivals();
        for (let i = 0, j = l.length; i < j; i++) {
            if ('杨公忌' === l[i].getName()) {
                return true;
            }
        }
        return false;
    }

    isDayZhaiShuoWang(): boolean {
        const d = this.getDay();
        return 1 === d || 15 === d;
    }

    isDayZhaiSix(): boolean {
        const d = this.getDay();
        if (8 === d || 14 === d || 15 === d || 23 === d || 29 === d || 30 === d) {
            return true;
        } else if (28 === d) {
            const m = LunarMonth.fromYm(this._lunar.getYear(), this.getMonth());
            if (null != m && 30 !== m.getDayCount()) {
                return true;
            }
        }
        return false;
    }

    isDayZhaiTen(): boolean {
        const d = this.getDay();
        return 1 === d || 8 === d || 14 === d || 15 === d || 18 === d || 23 === d || 24 === d || 28 === d || 29 === d || 30 === d;
    }

    isDayZhaiGuanYin(): boolean {
        const k = this.getMonth() + '-' + this.getDay();
        for (let i = 0, j = FotoUtil.DAY_ZHAI_GUAN_YIN.length; i < j; i++) {
            if (k === FotoUtil.DAY_ZHAI_GUAN_YIN[i]) {
                return true;
            }
        }
        return false;
    }

    getXiu(): string {
        return FotoUtil.getXiu(this.getMonth(), this.getDay());
    }

    getXiuLuck(): string {
        return LunarUtil.XIU_LUCK[this.getXiu()];
    }

    getXiuSong(): string {
        return LunarUtil.XIU_SONG[this.getXiu()];
    }

    getZheng(): string {
        return LunarUtil.ZHENG[this.getXiu()];
    }

    getAnimal(): string {
        return LunarUtil.ANIMAL[this.getXiu()];
    }

    getGong(): string {
        return LunarUtil.GONG[this.getXiu()];
    }

    getShou(): string {
        return LunarUtil.SHOU[this.getGong()];
    }

    toString(): string {
        return this.getYearInChinese() + '年' + this.getMonthInChinese() + '月' + this.getDayInChinese();
    }

    toFullString(): string {
        let s = this.toString();
        const festivals = this.getFestivals();
        for (let i = 0, j = festivals.length; i < j; i++) {
            s += ' (' + festivals[i] + ')';
        }
        return s;
    }
}
