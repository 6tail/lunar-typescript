import {SolarUtil} from './SolarUtil';
import {Solar} from './Solar';

export class SolarWeek {

    private readonly _year: number;
    private readonly _month: number;
    private readonly _day: number;
    private readonly _start: number;

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
        let offset = Solar.fromYmd(this._year,this._month,1).getWeek() - this._start;
        if(offset < 0) {
            offset += 7;
        }
        return Math.ceil((this._day + offset) / 7);
    }

    getIndexInYear(): number {
        let offset = Solar.fromYmd(this._year,1,1).getWeek() - this._start;
        if(offset < 0) {
            offset += 7;
        }
        return Math.ceil((SolarUtil.getDaysInYear(this._year, this._month, this._day) + offset) / 7);
    }

    next(weeks: number, separateMonth: boolean): SolarWeek {
        const start = this._start;
        if (0 === weeks) {
            return SolarWeek.fromYmd(this._year, this._month, this._day, start);
        }
        let solar = Solar.fromYmd(this._year, this._month, this._day);
        if (separateMonth) {
            let n = weeks;
            let week = SolarWeek.fromYmd(this._year, this._month, this._day, start);
            let month = this._month;
            const plus = n > 0;
            while (0 !== n) {
                solar = solar.next(plus ? 7 : -7);
                week = SolarWeek.fromYmd(solar.getYear(), solar.getMonth(), solar.getDay(), start);
                let weekMonth = week.getMonth();
                if (month !== weekMonth) {
                    const index = week.getIndex();
                    if (plus) {
                        if (1 === index) {
                            const firstDay = week.getFirstDay();
                            week = SolarWeek.fromYmd(firstDay.getYear(), firstDay.getMonth(), firstDay.getDay(), start);
                            weekMonth = week.getMonth();
                        } else {
                            solar = Solar.fromYmd(week.getYear(), week.getMonth(), 1);
                            week = SolarWeek.fromYmd(solar.getYear(), solar.getMonth(), solar.getDay(), start);
                        }
                    } else {
                        if (SolarUtil.getWeeksOfMonth(week.getYear(), week.getMonth(), start) === index) {
                            const lastDay = week.getFirstDay().next(6);
                            week = SolarWeek.fromYmd(lastDay.getYear(), lastDay.getMonth(), lastDay.getDay(), start);
                            weekMonth = week.getMonth();
                        } else {
                            solar = Solar.fromYmd(week.getYear(), week.getMonth(), SolarUtil.getDaysOfMonth(week.getYear(), week.getMonth()));
                            week = SolarWeek.fromYmd(solar.getYear(), solar.getMonth(), solar.getDay(), start);
                        }
                    }
                    month = weekMonth;
                }
                n -= plus ? 1 : -1;
            }
            return week;
        } else {
            solar = solar.next(weeks * 7);
            return SolarWeek.fromYmd(solar.getYear(), solar.getMonth(), solar.getDay(), start);
        }
    }

    getFirstDay(): Solar {
        const solar = Solar.fromYmd(this._year, this._month, this._day);
        let prev = solar.getWeek() - this._start;
        if (prev < 0) {
            prev += 7;
        }
        return solar.next(-prev);
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
