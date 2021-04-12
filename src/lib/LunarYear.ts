import {LunarMonth} from './LunarMonth';
import {Lunar} from './Lunar';
import {ShouXingUtil} from './ShouXingUtil';
import {Solar} from './Solar';

export class LunarYear {

    private _year: number;
    private _months: LunarMonth[];
    private _jieQiJulianDays: number[];

    static fromYear(year: number): LunarYear {
        return new LunarYear(year);
    }

    constructor(lunarYear: number) {
        this._year = lunarYear;
        this._months = [];
        this._jieQiJulianDays = [];
        this.compute();
    }

    private compute(): void {
        // 节气(中午12点)，长度25
        let jq: number[] = [];
        // 合朔，即每月初一(中午12点)，长度15
        let hs: number[] = [];
        // 每月天数，长度14
        let dayCounts: number[] = [];

        let year = this._year - 2000;
        // 从上年的大雪到下年的大寒
        for (let i = 0, j = Lunar.JIE_QI_IN_USE.length; i < j; i++) {
            // 精确的节气
            let t = 36525 * ShouXingUtil.saLonT((year + (17 + i) * 15.0 / 360) * ShouXingUtil.PI_2);
            t += ShouXingUtil.ONE_THIRD - ShouXingUtil.dtT(t);
            this._jieQiJulianDays.push(t + Solar.J2000);
            // 按中午12点算的节气
            if (i > 0 && i < 26) {
                jq[i - 1] = Math.round(t);
            }
        }

        // 冬至前的初一
        let w = ShouXingUtil.calcShuo(jq[0]);
        if (w > jq[0]) {
            w -= 29.5306;
        }
        // 递推每月初一
        for (let i = 0; i < 15; i++) {
            hs[i] = ShouXingUtil.calcShuo(w + 29.5306 * i);
        }
        // 每月天数
        for (let i = 0; i < 14; i++) {
            dayCounts[i] = Math.floor(hs[i + 1] - hs[i]);
        }

        let leap = -1;
        if (hs[13] <= jq[24]) {
            let i = 1;
            while (hs[i + 1] > jq[2 * i] && i < 13) {
                i++;
            }
            leap = i;
        }

        let y = this._year - 1;
        let m = 11;
        for (let i = 0; i < 14; i++) {
            let isLeap = false;
            if (i == leap) {
                isLeap = true;
                m--;
            }
            this._months.push(new LunarMonth(y, isLeap ? -m : m, dayCounts[i], hs[i] + Solar.J2000));
            m++;
            if (m == 13) {
                m = 1;
                y++;
            }
        }
    }

    getYear(): number {
        return this._year;
    }

    getJieQiJulianDays(): number[] {
        return this._jieQiJulianDays;
    }

    getMonths(): LunarMonth[] {
        return this._months;
    }

    getMonth(lunarMonth: number): LunarMonth | null {
        for (let i = 0, j = this._months.length; i < j; i++) {
            const m = this._months[i];
            if (m.getYear() == this._year && m.getMonth() == lunarMonth) {
                return m;
            }
        }
        return null;
    }

    getLeapMonth(): number {
        for (let i = 0, j = this._months.length; i < j; i++) {
            const m = this._months[i];
            if (m.getYear() == this._year && m.isLeap()) {
                return Math.abs(m.getMonth());
            }
        }
        return 0;
    }

    toString(): string {
        return `${this.getYear()}`;
    }

    toFullString(): string {
        return `${this.getYear()}年`;
    }
}
