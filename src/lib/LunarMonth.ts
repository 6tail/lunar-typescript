import {LunarUtil} from './LunarUtil';
import {LunarYear} from './LunarYear';

export class LunarMonth {

    private _year: number;
    private _month: number;
    private _dayCount: number;
    private _firstJulianDay: number;

    static fromYm(lunarYear: number, lunarMonth: number): LunarMonth | null {
        return LunarYear.fromYear(lunarYear).getMonth(lunarMonth);
    }

    constructor(lunarYear: number, lunarMonth: number, dayCount: number, firstJulianDay: number) {
        this._year = lunarYear;
        this._month = lunarMonth;
        this._dayCount = dayCount;
        this._firstJulianDay = firstJulianDay;
    }

    getYear(): number {
        return this._year;
    }

    getMonth(): number {
        return this._month;
    }

    isLeap(): boolean {
        return this._month < 0;
    }

    getDayCount(): number {
        return this._dayCount;
    }

    getFirstJulianDay(): number {
        return this._firstJulianDay;
    }

    toString(): string {
        return `${this.getYear()}年${this.isLeap()?'闰':''}${LunarUtil.MONTH[Math.abs(this.getMonth())]}月(${this.getDayCount()})天`;
    }
}
