import {SolarUtil} from './SolarUtil';
import {Solar} from './Solar';
import {SolarWeek} from './SolarWeek';

export class SolarMonth {

    private readonly _year: number;
    private readonly _month: number;

    static fromYm(year: number, month: number): SolarMonth {
        return new SolarMonth(year, month);
    }

    static fromDate(date: Date): SolarMonth {
        return SolarMonth.fromYm(date.getFullYear(), date.getMonth() + 1);
    }

    constructor(year: number, month: number) {
        this._year = year;
        this._month = month;
    }

    getYear(): number {
        return this._year;
    }

    getMonth(): number {
        return this._month;
    }

    next(months: number): SolarMonth {
        const n = months < 0 ? -1 : 1;
        let m = Math.abs(months);
        let y = this._year + Math.floor(m / 12) * n;
        m = this._month + m % 12 * n;
        if (m > 12) {
            m -= 12;
            y++;
        } else if (m < 1) {
            m += 12;
            y--;
        }
        return SolarMonth.fromYm(y, m);
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
