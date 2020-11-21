import {Lunar} from './Lunar';
import {Solar} from './Solar';
import {LunarUtil} from './LunarUtil';
import {DaYun} from './DaYun';

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
        let hourDiff = LunarUtil.getTimeZhiIndex(end.toYmdHms().substr(11, 5)) - LunarUtil.getTimeZhiIndex(start.toYmdHms().substr(11, 5));
        const endCalendar = new Date(end.getYear(), end.getMonth() - 1, end.getDay());
        const startCalendar = new Date(start.getYear(), start.getMonth() - 1, start.getDay());
        // 天数差
        let dayDiff = Math.floor((endCalendar.getTime() - startCalendar.getTime()) / (1000 * 3600 * 24));
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
        return Solar.fromDate(new Date(birth.getYear() + this._startYear, birth.getMonth() - 1 + this._startMonth, birth.getDay() + this._startDay));
    }

    getDaYun(): DaYun[] {
        const l: DaYun[] = [];
        for (let i = 0; i < 10; i++) {
            l.push(new DaYun(this, i));
        }
        return l;
    }
}
