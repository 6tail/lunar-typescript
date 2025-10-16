import {SolarUtil} from './SolarUtil';
import {SolarWeek} from './SolarWeek';
import {LunarUtil} from './LunarUtil';
import {HolidayUtil} from './HolidayUtil';
import {Lunar} from './Lunar';
import {SolarMonth} from './SolarMonth';

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

        if (d >= 2299161) {
            const c = Math.floor((d - 1867216.25) / 36524.25);
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
        if (hour > 23) {
            hour -= 24;
            day += 1;
        }
        return Solar.fromYmdHms(year, month, day, hour, minute, second);
    }

    static fromBaZi(yearGanZhi: string, monthGanZhi: string, dayGanZhi: string, timeGanZhi: string, sect: number = 2, baseYear = 1900): Solar[] {
        sect = (1 == sect) ? 1 : 2;
        const l: Solar[] = [];
        // 月地支距寅月的偏移值
        let m = LunarUtil.index(monthGanZhi.substring(1), LunarUtil.ZHI, -1) - 2;
        if (m < 0) {
            m += 12;
        }
        // 月天干要一致
        if (((LunarUtil.index(yearGanZhi.substring(0, 1), LunarUtil.GAN, -1) + 1) * 2 + m) % 10 !== LunarUtil.index(monthGanZhi.substring(0, 1), LunarUtil.GAN, -1)) {
            return l;
        }
        // 1年的立春是辛酉，序号57
        let y = LunarUtil.getJiaZiIndex(yearGanZhi) - 57;
        if (y < 0) {
            y += 60;
        }
        y++;
        // 节令偏移值
        m *= 2;
        // 时辰地支转时刻，子时按零点算
        const h = LunarUtil.index(timeGanZhi.substring(1), LunarUtil.ZHI, -1) * 2;
        let hours = [h];
        if (0 == h && 2 == sect) {
            hours = [0, 23];
        }
        const startYear = baseYear - 1;

        // 结束年
        const endYear = new Date().getFullYear();

        while (y <= endYear) {
            if (y >= startYear) {
                // 立春为寅月的开始
                const jieQiLunar = Lunar.fromYmd(y, 1, 1);
                const jieQiList = jieQiLunar.getJieQiList();
                const jieQiTable = jieQiLunar.getJieQiTable();
                // 节令推移，年干支和月干支就都匹配上了
                let solarTime = jieQiTable[jieQiList[4 + m]];
                if (solarTime.getYear() >= baseYear) {
                    // 日干支和节令干支的偏移值
                    let d = LunarUtil.getJiaZiIndex(dayGanZhi) - LunarUtil.getJiaZiIndex(solarTime.getLunar().getDayInGanZhiExact2());
                    if (d < 0) {
                        d += 60;
                    }
                    if (d > 0) {
                        // 从节令推移天数
                        solarTime = solarTime.next(d);
                    }
                    hours.forEach(hour => {
                        let mi = 0;
                        let s = 0;
                        if (d == 0 && hour === solarTime.getHour()) {
                            // 如果正好是节令当天，且小时和节令的小时数相等的极端情况，把分钟和秒钟带上
                            mi = solarTime.getMinute();
                            s = solarTime.getSecond();
                        }
                        // 验证一下
                        let solar = Solar.fromYmdHms(solarTime.getYear(), solarTime.getMonth(), solarTime.getDay(), hour, mi, s);
                        if (d === 30) {
                            solar = solar.nextHour(-1);
                        }
                        const lunar = solar.getLunar();
                        const dgz = (2 === sect) ? lunar.getDayInGanZhiExact2() : lunar.getDayInGanZhiExact();
                        if (lunar.getYearInGanZhiExact() === yearGanZhi && lunar.getMonthInGanZhiExact() === monthGanZhi && dgz === dayGanZhi && lunar.getTimeInGanZhi() === timeGanZhi) {
                            l.push(solar);
                        }
                    });
                }
            }
            y += 60;
        }
        return l;
    }

    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number) {
        if (1582 === year && 10 === month) {
            if (day > 4 && day < 15) {
                throw new Error(`wrong solar year ${year} month ${month} day ${day}`);
            }
        }
        if (month < 1 || month > 12) {
            throw new Error(`wrong month ${month}`);
        }
        if (day < 1 || day > 31) {
            throw new Error(`wrong day ${day}`);
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
        return (Math.floor(this.getJulianDay() + 0.5) + 7000001) % 7;
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
        let f = SolarUtil.FESTIVAL[this._month + '-' + this._day];
        if (f) {
            l.push(f);
        }
        const weeks = Math.ceil(this._day / 7);
        const week = this.getWeek();
        f = SolarUtil.WEEK_FESTIVAL[this._month + '-' + weeks + '-' + week];
        if (f) {
            l.push(f);
        }
        if (this._day + 7 > SolarUtil.getDaysOfMonth(this._year, this._month)) {
            f = SolarUtil.WEEK_FESTIVAL[this._month + '-0-' + week];
            if (f) {
                l.push(f);
            }
        }
        return l;
    }

    getOtherFestivals(): string[] {
        const l: string[] = [];
        const fs = SolarUtil.OTHER_FESTIVAL[this._month + '-' + this._day];
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

    /**
     * 获取薪资比例(感谢 https://gitee.com/smr1987)
     * @returns 1 | 2 | 3 薪资比例
     */
    getSalaryRate(): number {
        // 元旦节
        if (this._month === 1 && this._day === 1) {
            return 3;
        }
        // 劳动节
        if (this._month === 5 && this._day === 1) {
            return 3;
        }
        // 国庆
        if (this._month === 10 && this._day >= 1 && this._day <= 3) {
            return 3;
        }
        const lunar = this.getLunar();
        // 春节
        if (lunar.getMonth() === 1 && lunar.getDay() >= 1 && lunar.getDay() <= 3) {
            return 3;
        }
        // 端午
        if (lunar.getMonth() === 5 && lunar.getDay() === 5) {
            return 3;
        }
        // 中秋
        if (lunar.getMonth() === 8 && lunar.getDay() === 15) {
            return 3;
        }
        // 清明
        if ('清明' === lunar.getJieQi()) {
            return 3;
        }
        const holiday = HolidayUtil.getHoliday(this._year, this._month, this._day);
        if (holiday) {
            // 法定假日非上班
            if (!holiday.isWork()) {
                return 2;
            }
        } else {
            // 周末
            const week = this.getWeek();
            if (week === 6 || week === 0) {
                return 2;
            }
        }
        // 工作日
        return 1;
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
        const m = this._month;
        let d = this._day;
        if (1582 === y && 10 === m) {
            if (d > 4 && d < 15) {
                d += 10;
            }
        } else if (2 === m) {
            if (d > 28) {
                if (!SolarUtil.isLeapYear(y)) {
                    d = 28;
                }
            }
        }
        return Solar.fromYmdHms(y, m, d, this._hour, this._minute, this._second);
    }

    nextMonth(months: number): Solar {
        const month = SolarMonth.fromYm(this._year, this._month).next(months);
        const y = month.getYear();
        const m = month.getMonth();
        let d = this._day;
        if (1582 === y && 10 === m) {
            if (d > 4 && d < 15) {
                d += 10;
            }
        } else {
            const maxDay = SolarUtil.getDaysOfMonth(y, m);
            if (d > maxDay) {
                d = maxDay;
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
        const d = this._day + ((this._second / 60 + this._minute) / 60 + this._hour) / 24;
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
