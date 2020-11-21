import {SolarUtil} from './SolarUtil';
import {Solar} from './Solar';

export class SolarWeek {

    private _year: number;
    private _month: number;
    private _day: number;
    private _start: number;
    private _calendar: Date;

    static fromYmd(year: number, month: number, day: number, start: number): SolarWeek {
        return new SolarWeek(year, month, day, start);
    }

    static fromDate(date: Date, start: number): SolarWeek {
        return SolarWeek.fromYmd(date.getFullYear(), date.getMonth() + 1, date.getDate(), start);
    }

    constructor(year: number, month: number, day: number, start: number) {
        this._year = year;
        this._month = month;
        this._day = day;
        this._start = start;
        this._calendar = new Date(year + '/' + month + '/' + day);
    }

    getYear(): number {
        return this._year;
    }

    getMonth(): number {
        return this._month;
    }

    getDay(): number {
        return this._day;
    }

    getStart(): number {
        return this._start;
    }

    getIndex(): number {
        const firstDate = new Date(this._year + '/' + this._month + '/1');
        let firstDayWeek = firstDate.getDay();
        if (firstDayWeek === 0) {
            firstDayWeek = 7;
        }
        return Math.ceil((this._day + firstDayWeek - this._start) / 7);
    }

    next(weeks: number, separateMonth: boolean): SolarWeek {
        if (0 === weeks) {
            return SolarWeek.fromYmd(this._year, this._month, this._day, this._start);
        }
        let date;
        if (separateMonth) {
            let n = weeks;
            date = new Date(this._year + '/' + this._month + '/' + this._day);
            let week = SolarWeek.fromDate(date, this._start);
            let month = this._month;
            const plus = n > 0;
            while (0 !== n) {
                date.setDate(date.getDate() + (plus ? 7 : -7));
                week = SolarWeek.fromDate(date, this._start);
                let weekMonth = week.getMonth();
                if (month !== weekMonth) {
                    const index = week.getIndex();
                    if (plus) {
                        if (1 === index) {
                            const firstDay = week.getFirstDay();
                            week = SolarWeek.fromYmd(firstDay.getYear(), firstDay.getMonth(), firstDay.getDay(), this._start);
                            weekMonth = week.getMonth();
                        } else {
                            date = new Date(week.getYear() + '/' + week.getMonth() + '/1');
                            week = SolarWeek.fromDate(date, this._start);
                        }
                    } else {
                        const size = SolarUtil.getWeeksOfMonth(week.getYear(), week.getMonth(), this._start);
                        if (size === index) {
                            const lastDay = week.getFirstDay().next(6);
                            week = SolarWeek.fromYmd(lastDay.getYear(), lastDay.getMonth(), lastDay.getDay(), this._start);
                            weekMonth = week.getMonth();
                        } else {
                            date = new Date(week.getYear() + '/' + week.getMonth() + '/' + SolarUtil.getDaysOfMonth(week.getYear(), week.getMonth()));
                            week = SolarWeek.fromDate(date, this._start);
                        }
                    }
                    month = weekMonth;
                }
                n -= plus ? 1 : -1;
            }
            return week;
        } else {
            date = new Date(this._year + '/' + this._month + '/' + this._day);
            date.setDate(date.getDate() + weeks * 7);
            return SolarWeek.fromDate(date, this._start);
        }
    }

    getFirstDay(): Solar {
        const date = new Date(this._year + '/' + this._month + '/' + this._day);
        let prev = date.getDay() - this._start;
        if (prev < 0) {
            prev += 7;
        }
        date.setDate(date.getDate() - prev);
        return Solar.fromDate(date);
    }

    getFirstDayInMonth(): Solar {
        let index = 0;
        const days = this.getDays();
        for (let i = 0; i < days.length; i++) {
            if (this._month === days[i].getMonth()) {
                index = i;
                break;
            }
        }
        return days[index];
    }

    getDays(): Solar[] {
        const firstDay = this.getFirstDay();
        const l: Solar[] = [];
        l.push(firstDay);
        for (let i = 1; i < 7; i++) {
            l.push(firstDay.next(i));
        }
        return l;
    }

    getDaysInMonth(): Solar[] {
        const days = this.getDays();
        const l: Solar[] = [];
        for (let i = 0; i < days.length; i++) {
            const day = days[i];
            if (this._month !== day.getMonth()) {
                continue;
            }
            l.push(day);
        }
        return l;
    }

    toString(): string {
        return `${this.getYear()}.${this.getMonth()}.${this.getIndex()}`;
    }

    toFullString(): string {
        return `${this.getYear()}年${this.getMonth()}月第${this.getIndex()}周`;
    }
}
