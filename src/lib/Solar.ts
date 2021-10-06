import {SolarUtil} from './SolarUtil';
import {SolarWeek} from './SolarWeek';
import {LunarUtil} from './LunarUtil';
import {HolidayUtil} from './HolidayUtil';
import {Lunar} from './Lunar';
import {ExactDate} from './ExactDate';

export class Solar {
    static J2000: number = 2451545;

    private _year: number;
    private _month: number;
    private _day: number;
    private _hour: number;
    private _minute: number;
    private _second: number;
    private _calendar: Date;

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
        return Solar.fromYmdHms(year, month, day, hour, minute, second);
    }

    static fromBaZi(yearGanZhi: string, monthGanZhi: string, dayGanZhi: string, timeGanZhi: string, sect: number = 2, baseYear = 1900): Solar[] {
        sect = (1 == sect) ? 1 : 2;
        const l: Solar[] = [];
        const today = Solar.fromDate(new Date());
        let lunar = today.getLunar();
        let offsetYear = LunarUtil.getJiaZiIndex(lunar.getYearInGanZhiExact()) - LunarUtil.getJiaZiIndex(yearGanZhi);
        if (offsetYear < 0) {
            offsetYear = offsetYear + 60;
        }
        let startYear = today.getYear() - offsetYear;
        let hour = 0;
        let timeZhi = timeGanZhi.substr(1);
        for (let i = 0, j = LunarUtil.ZHI.length; i < j; i++) {
            if (LunarUtil.ZHI[i] === timeZhi) {
                hour = (i - 1) * 2;
            }
        }
        while (startYear >= baseYear) {
            let year = startYear - 1;
            let counter = 0;
            let month = 12;
            let day;
            let solar;
            let found = false;
            while (counter < 15) {
                if (year >= baseYear) {
                    day = 1;
                    solar = Solar.fromYmdHms(year, month, day, hour, 0, 0);
                    lunar = solar.getLunar();
                    if (lunar.getYearInGanZhiExact() === yearGanZhi && lunar.getMonthInGanZhiExact() === monthGanZhi) {
                        found = true;
                        break;
                    }
                }
                month++;
                if (month > 12) {
                    month = 1;
                    year++;
                }
                counter++;
            }
            if (found) {
                counter = 0;
                month--;
                if (month < 1) {
                    month = 12;
                    year--;
                }
                day = 1;
                solar = Solar.fromYmdHms(year, month, day, hour, 0, 0);
                while (counter < 61) {
                    lunar = solar.getLunar();
                    const dgz = (2 == sect) ? lunar.getDayInGanZhiExact2() : lunar.getDayInGanZhiExact();
                    if (lunar.getYearInGanZhiExact() === yearGanZhi && lunar.getMonthInGanZhiExact() === monthGanZhi && dgz === dayGanZhi && lunar.getTimeInGanZhi() === timeGanZhi) {
                        l.push(solar);
                        break;
                    }
                    solar = solar.next(1);
                    counter++;
                }
            }
            startYear -= 60;
        }
        return l;
    }

    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number) {
        if (year === 1582 && month === 10) {
            if (day >= 15) {
                day -= 10;
            }
        }
        this._year = year;
        this._month = month;
        this._day = day;
        this._hour = hour;
        this._minute = minute;
        this._second = second;
        this._calendar = ExactDate.fromYmdHms(year, month, day, hour, minute, second);
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
        return this._calendar.getDay();
    }

    getWeekInChinese(): string {
        return SolarUtil.WEEK[this.getWeek()];
    }

    getSolarWeek(start: number): SolarWeek {
        return SolarWeek.fromDate(this._calendar, start);
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
        let d = this._day;
        if (this._year === 1582 && this._month == 10) {
            if (d >= 5) {
                d += 10;
            }
        }
        let y = this._year + '';
        while (y.length < 4) {
            y = '0' + y;
        }
        return [y, (this._month < 10 ? '0' : '') + this._month, (d < 10 ? '0' : '') + d].join('-');
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

    next(days: number, onlyWorkday: boolean = false): Solar {
        let date = ExactDate.fromYmdHms(this._year, this._month, this._day, this._hour, this._minute, this._second);
        if (0 != days) {
            if (!onlyWorkday) {
                date.setDate(date.getDate() + days);
            } else {
                let rest = Math.abs(days);
                const add = days < 1 ? -1 : 1;
                while (rest > 0) {
                    date.setDate(date.getDate() + add);
                    let work = true;
                    const holiday = HolidayUtil.getHoliday(date.getFullYear(), date.getMonth() + 1, date.getDate());
                    if (!holiday) {
                        const week = date.getDay();
                        if (0 == week || 6 == week) {
                            work = false;
                        }
                    } else {
                        work = holiday.isWork();
                    }
                    if (work) {
                        rest--;
                    }
                }
            }
        }
        return Solar.fromDate(date);
    }

    getLunar() {
        return Lunar.fromDate(this._calendar);
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

    getCalendar(): Date {
        return this._calendar;
    }
}
