import {SolarUtil} from './SolarUtil';
import {Solar} from './Solar';
import {SolarWeek} from './SolarWeek';
import {ExactDate} from './ExactDate';

export class SolarMonth {

    private _year: number;
    private _month: number;
    private _calendar: Date;

    static fromYm(year: number, month: number): SolarMonth {
        return new SolarMonth(year, month);
    }

    static fromDate(date: Date): SolarMonth {
        return SolarMonth.fromYm(date.getFullYear(), date.getMonth() + 1);
    }

    constructor(year: number, month: number) {
        this._year = year;
        this._month = month;
        this._calendar = ExactDate.fromYmd(year, month, 1);
    }

    getYear(): number {
        return this._year;
    }

    getMonth(): number {
        return this._month;
    }

    next(months: number): SolarMonth {
        const date = ExactDate.fromYmd(this._year, this._month, 1);
        date.setMonth(date.getMonth() + months);
        return SolarMonth.fromDate(date);
    }

    getDays(): Solar[] {
        const l: Solar[] = [];
        const d = Solar.fromYmd(this._year, this._month, 1);
        l.push(d);
        const days = SolarUtil.getDaysOfMonth(this._year, this._month);
        for (let i = 1; i < days; i++) {
            l.push(d.next(i));
        }
        return l;
    }

    getWeeks(start: number): SolarWeek[] {
        const l: SolarWeek[] = [];
        let week = SolarWeek.fromYmd(this._year, this._month, 1, start);
        while (true) {
            l.push(week);
            week = week.next(1, false);
            const firstDay = week.getFirstDay();
            if (firstDay.getYear() > this._year || firstDay.getMonth() > this._month) {
                break;
            }
        }
        return l;
    }

    toString(): string {
        return `${this.getYear()}-${this.getMonth()}`;
    }

    toFullString(): string {
        return `${this.getYear()}年${this.getMonth()}月`;
    }
}
