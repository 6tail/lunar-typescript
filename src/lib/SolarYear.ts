import {SolarMonth} from './SolarMonth';

export class SolarYear {

    private readonly _year: number;

    static fromYear(year: number): SolarYear {
        return new SolarYear(year);
    }

    static fromDate(date: Date): SolarYear {
        return SolarYear.fromYear(date.getFullYear());
    }

    constructor(year: number) {
        this._year = year;
    }

    getYear(): number {
        return this._year;
    }

    next(years: number): SolarYear {
        return SolarYear.fromYear(this._year + years);
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
