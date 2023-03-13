import {SolarUtil} from './SolarUtil';
import {SolarWeek} from './SolarWeek';
import {LunarUtil} from './LunarUtil';
import {HolidayUtil} from './HolidayUtil';
import {Lunar} from './Lunar';
import {SolarMonth} from './SolarMonth';
import {start} from "repl";
import base = Mocha.reporters.base;

export class Solar {
    static J2000: number = 2451545;

    private readonly _year: number;
    private readonly _month: number;
    private readonly _day: number;
    private readonly _hour: number;
    private readonly _minute: number;
    private readonly _second: number;

    static fromYmd(year: number, month: number, day: number): Solar {
        return Solar.fromYmdHms(year, month, day, 0, 0, 0);
    }

    static fromYmdHms(year: number, month: number, day: number, hour: number, minute: number, second: number): Solar {
        return new Solar(year, month, day, hour, minute, second);
    }

    static fromDate(date: Date): Solar {
        return Solar.fromYmdHms(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
    }

    static fromJulianDay(julianDay: number): Solar {
        let d = Math.floor(julianDay + 0.5);
        let f = julianDay + 0.5 - d;
        let c;

        if (d >= 2299161) {
            c = Math.floor((d - 1867216.25) / 36524.25);
            d += 1 + c - Math.floor(c / 4);
        }
        d += 1524;
        let year = Math.floor((d - 122.1) / 365.25);
        d -= Math.floor(365.25 * year);
        let month = Math.floor(d / 30.601);
        d -= Math.floor(30.601 * month);
        let day = d;
        if (month > 13) {
            month -= 13;
            year -= 4715;
        } else {
            month -= 1;
            year -= 4716;
        }
        f *= 24;
        let hour = Math.floor(f);

        f -= hour;
        f *= 60;
        let minute = Math.floor(f);

        f -= minute;
        f *= 60;
        let second = Math.round(f);
        if (second > 59) {
            second -= 60;
            minute++;
        }
        if (minute > 59) {
            minute -= 60;
            hour++;
        }
        return Solar.fromYmdHms(year, month, day, hour, minute, second);
    }

    static fromBaZi(yearGanZhi: string, monthGanZhi: string, dayGanZhi: string, timeGanZhi: string, sect: number = 2, baseYear = 1900): Solar[] {
        sect = (1 == sect) ? 1 : 2;
        const l: Solar[] = [];
        const years: number[] = [];
        const today = Solar.fromDate(new Date());
        let offsetYear = LunarUtil.getJiaZiIndex(today.getLunar().getYearInGanZhiExact()) - LunarUtil.getJiaZiIndex(yearGanZhi);
        if (offsetYear < 0) {
            offsetYear = offsetYear + 60;
        }
        let startYear = today.getYear() - offsetYear - 1;
        const minYear = baseYear - 2;
        while (startYear >= minYear) {
            years.push(startYear);
            startYear -= 60;
        }
        const hours = [];
        let timeZhi = timeGanZhi.substring(1);
        for (let i = 1, j = LunarUtil.ZHI.length; i < j; i++) {
            if (LunarUtil.ZHI[i] === timeZhi) {
                hours.push((i - 1) * 2);
            }
        }
        if ('子' === timeZhi) {
            hours.push(23);
        }
        const j = years.length;
        for (let m = 0, n = hours.length; m < n; m++) {
            for (let i = 0; i < j; i++) {
                const y = years[i];
                const maxYear = y + 3;
                let year = y;
                let month = 11;
                if (year < baseYear) {
                    year = baseYear;
                    month = 1;
                }
                let solar = Solar.fromYmdHms(year, month, 1, hours[m], 0, 0);
                while (solar.getYear() <= maxYear) {
                    const lunar = solar.getLunar();
                    const dgz = (2 === sect) ? lunar.getDayInGanZhiExact2() : lunar.getDayInGanZhiExact();
                    if (lunar.getYearInGanZhiExact() === yearGanZhi && lunar.getMonthInGanZhiExact() === monthGanZhi && dgz === dayGanZhi && lunar.getTimeInGanZhi() === timeGanZhi) {
                        l.push(solar);
                        break;
                    }
                    solar = solar.next(1);
                }
            }
        }
        return l;
    }

    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number) {
        if (1582 === year && 10 === month) {
            if (day > 4 && day < 15) {
                throw new Error(`wrong solar year ${year} month ${month} day ${day}`);
            }
        }
        if (hour < 0 || hour > 23) {
            throw new Error(`wrong hour ${hour}`);
        }
        if (minute < 0 || minute > 59) {
            throw new Error(`wrong minute ${minute}`);
        }
        if (second < 0 || second > 59) {
            throw new Error(`wrong second ${second}`);
        }
        this._year = year;
        this._month = month;
        this._day = day;
        this._hour = hour;
        this._minute = minute;
        this._second = second;
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

    getHour(): number {
        return this._hour;
    }

    getMinute(): number {
        return this._minute;
    }

    getSecond(): number {
        return this._second;
    }

    getWeek(): number {
        const start = Solar.fromYmdHms(1582, 10, 15, 0, 0, 0);
        let y = this._year;
        let m = this._month;
        let d = this._day;
        const current = Solar.fromYmdHms(y, m, d, 0, 0, 0);
        // 蔡勒公式
        if (m < 3) {
            m += 12;
            y--;
        }
        let c = Math.floor(y/100);
        y = y - c * 100;
        let x = y + Math.floor(y/4) + Math.floor(c/4) - 2*c;
        let w;
        if (current.isBefore(start)) {
            w = (x + Math.floor((13*(m+1))/5) + d + 2) % 7;
        } else {
            w = (x + Math.floor((26*(m+1))/10) + d - 1) % 7;
        }
        return (w + 7) % 7;
    }

    getWeekInChinese(): string {
        return SolarUtil.WEEK[this.getWeek()];
    }

    getSolarWeek(start: number): SolarWeek {
        return SolarWeek.fromYmd(this._year, this._month, this._day, start);
    }

    isLeapYear(): boolean {
        return SolarUtil.isLeapYear(this._year);
    }

    getFestivals(): string[] {
        const l: string[] = [];
        let f = SolarUtil.FESTIVAL.get(this._month + '-' + this._day);
        if (f) {
            l.push(f);
        }
        const weeks = Math.ceil(this._day / 7);
        const week = this.getWeek();
        f = SolarUtil.WEEK_FESTIVAL.get(this._month + '-' + weeks + '-' + week);
        if (f) {
            l.push(f);
        }
        if (this._day + 7 > SolarUtil.getDaysOfMonth(this._year, this._month)) {
            f = SolarUtil.WEEK_FESTIVAL.get(this._month + '-0-' + week);
            if (f) {
                l.push(f);
            }
        }
        return l;
    }

    getOtherFestivals(): string[] {
        const l: string[] = [];
        const fs = SolarUtil.OTHER_FESTIVAL.get(this._month + '-' + this._day);
        if (fs) {
            fs.forEach(f => {
                l.push(f);
            });
        }
        return l;
    }

    getXingzuo(): string {
        return this.getXingZuo();
    }

    getXingZuo(): string {
        let index = 11;
        const y = this._month * 100 + this._day;
        if (y >= 321 && y <= 419) {
            index = 0;
        } else if (y >= 420 && y <= 520) {
            index = 1;
        } else if (y >= 521 && y <= 621) {
            index = 2;
        } else if (y >= 622 && y <= 722) {
            index = 3;
        } else if (y >= 723 && y <= 822) {
            index = 4;
        } else if (y >= 823 && y <= 922) {
            index = 5;
        } else if (y >= 923 && y <= 1023) {
            index = 6;
        } else if (y >= 1024 && y <= 1122) {
            index = 7;
        } else if (y >= 1123 && y <= 1221) {
            index = 8;
        } else if (y >= 1222 || y <= 119) {
            index = 9;
        } else if (y <= 218) {
            index = 10;
        }
        return SolarUtil.XINGZUO[index];
    }

    toYmd(): string {
        let y = this._year + '';
        while (y.length < 4) {
            y = '0' + y;
        }
        return [y, (this._month < 10 ? '0' : '') + this._month, (this._day < 10 ? '0' : '') + this._day].join('-');
    }

    toYmdHms(): string {
        return this.toYmd() + ' ' + [(this._hour < 10 ? '0' : '') + this._hour, (this._minute < 10 ? '0' : '') + this._minute, (this._second < 10 ? '0' : '') + this._second].join(':');
    }

    toString(): string {
        return this.toYmd();
    }

    toFullString(): string {
        let s = this.toYmdHms();
        if (this.isLeapYear()) {
            s += ' 闰年';
        }
        s += ' 星期' + this.getWeekInChinese();
        const festivals = this.getFestivals();
        festivals.forEach(f => {
            s += ' (' + f + ')';
        });
        s += ' ' + this.getXingZuo() + '座';
        return s;
    }

    nextYear(years: number): Solar {
        const y = this._year + years;
        let m = this._month;
        let d = this._day;
        // 2月处理
        if (2 === m) {
            if (d > 28) {
                if (!SolarUtil.isLeapYear(y)) {
                    d = 28;
                }
            }
        }
        if (1582 === y && 10 === m) {
            if (d > 4 && d < 15) {
                d += 10;
            }
        }
        return Solar.fromYmdHms(y, m, d, this._hour, this._minute, this._second);
    }

    nextMonth(months: number): Solar {
        const month = SolarMonth.fromYm(this._year, this._month).next(months);
        const y = month.getYear();
        const m = month.getMonth();
        let d = this._day;
        // 2月处理
        if (2 === m) {
            if (d > 28) {
                if (!SolarUtil.isLeapYear(y)) {
                    d = 28;
                }
            }
        }
        if (1582 === y && 10 === m) {
            if (d > 4 && d < 15) {
                d += 10;
            }
        }
        return Solar.fromYmdHms(y, m, d, this._hour, this._minute, this._second);
    }

    nextDay(days: number): Solar {
        let y = this._year;
        let m = this._month;
        let d = this._day;
        if (1582 === y && 10 === m) {
            if (d > 4) {
                d -= 10
            }
        }
        if (days > 0) {
            d += days;
            let daysInMonth = SolarUtil.getDaysOfMonth(y, m);
            while (d > daysInMonth) {
                d -= daysInMonth;
                m++;
                if (m > 12) {
                    m = 1;
                    y++;
                }
                daysInMonth = SolarUtil.getDaysOfMonth(y, m);
            }
        } else if (days < 0) {
            while (d + days <= 0) {
                m--;
                if (m < 1) {
                    m = 12;
                    y--;
                }
                d += SolarUtil.getDaysOfMonth(y, m);
            }
            d += days;
        }
        if (1582 === y && 10 === m) {
            if (d > 4) {
                d += 10;
            }
        }
        return Solar.fromYmdHms(y, m, d, this._hour, this._minute, this._second);
    }

    next(days: number, onlyWorkday: boolean = false): Solar {
        if (onlyWorkday) {
            let solar = Solar.fromYmdHms(this._year, this._month, this._day, this._hour, this._minute, this._second);
            if (days !== 0) {
                let rest = Math.abs(days);
                const add = days < 1 ? -1 : 1;
                while (rest > 0) {
                    solar = solar.next(add);
                    let work = true;
                    const holiday = HolidayUtil.getHoliday(solar.getYear(), solar.getMonth(), solar.getDay());
                    if (!holiday) {
                        const week = solar.getWeek();
                        if (0 === week || 6 === week) {
                            work = false;
                        }
                    } else {
                        work = holiday.isWork();
                    }
                    if (work) {
                        rest -= 1;
                    }
                }
            }
            return solar;
        } else {
            return this.nextDay(days);
        }
    }

    nextHour(hours: number): Solar {
        const h = this._hour + hours;
        const n = h < 0 ? -1 : 1;
        let hour = Math.abs(h);
        let days = Math.floor(hour / 24) * n;
        hour = (hour % 24) * n;
        if (hour < 0) {
            hour += 24;
            days--;
        }
        const solar = this.next(days);
        return Solar.fromYmdHms(solar.getYear(), solar.getMonth(), solar.getDay(), hour, solar.getMinute(), solar.getSecond());
    }

    getLunar(): Lunar {
        return Lunar.fromSolar(this);
    }

    getJulianDay(): number {
        let y = this._year;
        let m = this._month;
        let d = this._day + ((this._second / 60 + this._minute) / 60 + this._hour) / 24;
        let n = 0;
        let g = false;
        if (y * 372 + m * 31 + Math.floor(d) >= 588829) {
            g = true;
        }
        if (m <= 2) {
            m += 12;
            y--;
        }
        if (g) {
            n = Math.floor(y / 100);
            n = 2 - n + Math.floor(n / 4);
        }
        return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + n - 1524.5;
    }

    isBefore(solar: Solar): boolean {
        if (this._year > solar.getYear()) {
            return false;
        }
        if (this._year < solar.getYear()) {
            return true;
        }
        if (this._month > solar.getMonth()) {
            return false;
        }
        if (this._month < solar.getMonth()) {
            return true;
        }
        if (this._day > solar.getDay()) {
            return false;
        }
        if (this._day < solar.getDay()) {
            return true;
        }
        if (this._hour > solar.getHour()) {
            return false;
        }
        if (this._hour < solar.getHour()) {
            return true;
        }
        if (this._minute > solar.getMinute()) {
            return false;
        }
        if (this._minute < solar.getMinute()) {
            return true;
        }
        return this._second < solar.getSecond();
    }

    isAfter(solar: Solar): boolean {
        if (this._year > solar.getYear()) {
            return true;
        }
        if (this._year < solar.getYear()) {
            return false;
        }
        if (this._month > solar.getMonth()) {
            return true;
        }
        if (this._month < solar.getMonth()) {
            return false;
        }
        if (this._day > solar.getDay()) {
            return true;
        }
        if (this._day < solar.getDay()) {
            return false;
        }
        if (this._hour > solar.getHour()) {
            return true;
        }
        if (this._hour < solar.getHour()) {
            return false;
        }
        if (this._minute > solar.getMinute()) {
            return true;
        }
        if (this._minute < solar.getMinute()) {
            return false;
        }
        return this._second > solar.getSecond();
    }

    subtract(solar: Solar): number {
        return SolarUtil.getDaysBetween(solar.getYear(), solar.getMonth(), solar.getDay(), this._year, this._month, this._day);
    }

    subtractMinute(solar: Solar): number {
        let days = this.subtract(solar);
        const cm = this._hour * 60 + this._minute;
        const sm = solar.getHour() * 60 + solar.getMinute();
        let m = cm - sm;
        if (m < 0) {
            m += 1440;
            days--;
        }
        m += days * 1440;
        return m;
    }

}
