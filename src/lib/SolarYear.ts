import {SolarMonth} from './SolarMonth';

export class SolarYear {

    private _year: number;
    private _calendar: Date;

    static fromYear(year: number): SolarYear {
        return new SolarYear(year);
    }

    static fromDate(date: Date): SolarYear {
        return SolarYear.fromYear(date.getFullYear());
    }

    constructor(year: number) {
        this._year = year;
        this._calendar = new Date(`${year}/1/1`);
    }

    getYear(): number {
        return this._year;
    }

    next(years: number): SolarYear {
        if (0 === years) {
            return SolarYear.fromYear(this._year);
        }
        const date = new Date(`${this._year}/1/1`);
        date.setFullYear(date.getFullYear() + years);
        return SolarYear.fromDate(date);
    }

    getMonths(): SolarMonth[] {
        const l: SolarMonth[] = [];
        const m = SolarMonth.fromYm(this._year, 1);
        l.push(m);
        for (let i = 1; i < 12; i++) {
            l.push(m.next(i));
        }
        return l;
    }

    toString(): string {
        return `${this.getYear()}`;
    }

    toFullString(): string {
        return `${this.getYear()}年`;
    }
}
