import {SolarUtil} from './SolarUtil';

export class ExactDate {

    constructor() {
    }

    private static _(date: Date, year: number, month: number, day: number) {
        if (year < 100) {
            date.setFullYear(year);
            date.setMonth(month - 1);
            date.setDate(day);
        }
        date.setMilliseconds(0);
        return date;
    }

    static fromYmd(year: number, month: number, day: number): Date {
        return ExactDate.fromYmdHms(year, month, day, 0, 0, 0);
    }

    static fromYmdHms(year: number, month: number, day: number, hour: number, minute: number, second: number): Date {
        return ExactDate._(new Date(year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second), year, month, day);
    }

    static getDaysBetween(ay: number, am: number, ad: number, by: number, bm: number, bd: number): number {
        let n;
        let days;
        let i;
        if (ay == by) {
            n = SolarUtil.getDaysInYear(by, bm, bd) -
                SolarUtil.getDaysInYear(ay, am, ad);
        } else if (ay > by) {
            days = SolarUtil.getDaysOfYear(by) - SolarUtil.getDaysInYear(by, bm, bd);
            for (i = by + 1; i < ay; i++) {
                days += SolarUtil.getDaysOfYear(i);
            }
            days += SolarUtil.getDaysInYear(ay, am, ad);
            n = -days;
        } else {
            days = SolarUtil.getDaysOfYear(ay) - SolarUtil.getDaysInYear(ay, am, ad);
            for (i = ay + 1; i < by; i++) {
                days += SolarUtil.getDaysOfYear(i);
            }
            days += SolarUtil.getDaysInYear(by, bm, bd);
            n = days;
        }
        return n;
    }

    static getDaysBetweenDate(date0: Date, date1: Date): number {
        return ExactDate.getDaysBetween(date0.getFullYear(), date0.getMonth() + 1, date0.getDate(), date1.getFullYear(), date1.getMonth() + 1, date1.getDate());
    }

}
