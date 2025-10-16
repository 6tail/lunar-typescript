import {Lunar} from './Lunar';
import {Solar} from './Solar';
import {LunarUtil} from './LunarUtil';
import {DaYun} from './DaYun';

export class Yun {
    private readonly _gender: number;
    private readonly _startYear: number;
    private readonly _startMonth: number;
    private readonly _startDay: number;
    private readonly _startHour: number;
    private readonly _forward: boolean;
    private readonly _lunar: Lunar;

    constructor(lunar: Lunar, gender: number, sect: number = 1) {
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

        let hour = 0;
        if (2 === sect) {
            let minutes = end.subtractMinute(start);
            const year = Math.floor(minutes / 4320);
            minutes -= year * 4320;
            const month = Math.floor(minutes / 360);
            minutes -= month * 360;
            const day = Math.floor(minutes / 12);
            minutes -= day * 12;
            hour = minutes * 2;
            this._startYear = year;
            this._startMonth = month;
            this._startDay = day;
        } else {
            const endTimeZhiIndex = (end.getHour() == 23) ? 11 : LunarUtil.getTimeZhiIndex(end.toYmdHms().substring(11, 16));
            const startTimeZhiIndex = (start.getHour() == 23) ? 11 : LunarUtil.getTimeZhiIndex(start.toYmdHms().substring(11, 16));
            // 时辰差
            let hourDiff = endTimeZhiIndex - startTimeZhiIndex;
            // 天数差
            let dayDiff = end.subtract(start);
            if (hourDiff < 0) {
                hourDiff += 12;
                dayDiff--;
            }
            const monthDiff = Math.floor(hourDiff * 10 / 30);
            const month = dayDiff * 4 + monthDiff;
            this._startDay = hourDiff * 10 - monthDiff * 30;
            const year = Math.floor(month / 12);
            this._startMonth = month - year * 12;
            this._startYear = year;
        }
        this._startHour = hour;
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

    getStartHour(): number {
        return this._startHour;
    }

    isForward(): boolean {
        return this._forward;
    }

    getLunar(): Lunar {
        return this._lunar;
    }

    getStartSolar(): Solar {
        let solar = this._lunar.getSolar();
        solar = solar.nextYear(this._startYear);
        solar = solar.nextMonth(this._startMonth);
        solar = solar.next(this._startDay);
        return solar.nextHour(this._startHour);
    }

    getDaYun(n : number = 10): DaYun[] {
        const l: DaYun[] = [];
        for (let i = 0; i < n; i++) {
            l.push(new DaYun(this, i));
        }
        return l;
    }
}
