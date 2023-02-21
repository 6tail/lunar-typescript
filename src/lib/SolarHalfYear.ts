import {SolarMonth} from './SolarMonth';

export class SolarHalfYear {

    private readonly _year: number;
    private readonly _month: number;

    static fromYm(year: number, month: number): SolarHalfYear {
        return new SolarHalfYear(year, month);
    }

    static fromDate(date: Date): SolarHalfYear {
        return SolarHalfYear.fromYm(date.getFullYear(), date.getMonth() + 1);
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

    getIndex(): number {
        return Math.ceil(this._month / 6);
    }

    next(halfYears: number): SolarHalfYear {
        const month = SolarMonth.fromYm(this._year, this._month).next(6 * halfYears);
        return SolarHalfYear.fromYm(month.getYear(), month.getMonth());
    }

    getMonths(): SolarMonth[] {
        const l: SolarMonth[] = [];
        const index = this.getIndex() - 1;
        for (let i = 0; i < 6; i++) {
            l.push(SolarMonth.fromYm(this._year, 6 * index + i + 1));
        }
        return l;
    }

    toString(): string {
        return `${this.getYear()}.${this.getIndex()}`;
    }

    toFullString(): string {
        const name = ['上', '下'][this.getIndex() - 1];
        return `${this.getYear()}年${name}半年`;
    }
}
