import {Lunar} from './Lunar';
import {Solar} from './Solar';
import {LunarUtil} from './LunarUtil';
import {DaYun} from './DaYun';
import {ExactDate} from './ExactDate';

export class Yun {
    private _gender: number;
    private _startYear: number;
    private _startMonth: number;
    private _startDay: number;
    private _forward: boolean;
    private _lunar: Lunar;

    constructor(lunar: Lunar, gender: number) {
        this._gender = gender;
        this._lunar = lunar;
        const yang = 0 === lunar.getYearGanIndexExact() % 2;
        const man = 1 === gender;
        const forward = (yang && man) || (!yang && !man);
        this._forward = forward;
        const prev = lunar.getPrevJie();
        const next = lunar.getNextJie();
        const current = lunar.getSolar();
        const start = forward ? current : prev.getSolar();
        const end = forward ? next.getSolar() : current;
        const endTimeZhiIndex = (end.getHour() == 23) ? 11 : LunarUtil.getTimeZhiIndex(end.toYmdHms().substr(11, 5));
        const startTimeZhiIndex = (start.getHour() == 23) ? 11 : LunarUtil.getTimeZhiIndex(start.toYmdHms().substr(11, 5));
        // 时辰差
        let hourDiff = endTimeZhiIndex - startTimeZhiIndex;
        // 天数差
        let dayDiff = ExactDate.getDaysBetween(start.getYear(), start.getMonth(), start.getDay(), end.getYear(), end.getMonth(), end.getDay());
        if (hourDiff < 0) {
            hourDiff += 12;
            dayDiff--;
        }
        let monthDiff = Math.floor(hourDiff * 10 / 30);
        let month = dayDiff * 4 + monthDiff;
        let day = hourDiff * 10 - monthDiff * 30;
        let year = Math.floor(month / 12);
        month = month - year * 12;
        this._startYear = year;
        this._startMonth = month;
        this._startDay = day;
    }

    getGender(): number {
        return this._gender;
    }

    getStartYear(): number {
        return this._startYear;
    }

    getStartMonth(): number {
        return this._startMonth;
    }

    getStartDay(): number {
        return this._startDay;
    }

    isForward(): boolean {
        return this._forward;
    }

    getLunar(): Lunar {
        return this._lunar;
    }

    getStartSolar(): Solar {
        const birth = this._lunar.getSolar();
        const c = birth.getCalendar();
        c.setFullYear(birth.getYear() + this._startYear);
        c.setMonth(birth.getMonth() - 1 + this._startMonth);
        c.setDate(birth.getDay() + this._startDay);
        return Solar.fromDate(c);
    }

    getDaYun(n : number = 10): DaYun[] {
        const l: DaYun[] = [];
        for (let i = 0; i < n; i++) {
            l.push(new DaYun(this, i));
        }
        return l;
    }
}
