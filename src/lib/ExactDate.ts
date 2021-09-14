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
        return ExactDate._(new Date(year + '/' + month + '/' + day + ' 0:0:0 GMT+0800'), year, month, day);
    }

    static fromYmdHms(year: number, month: number, day: number, hour: number, minute: number, second: number): Date {
        return ExactDate._(new Date(year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second + ' GMT+0800'), year, month, day);
    }

}
