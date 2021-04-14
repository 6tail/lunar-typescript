import {SolarMonth} from './SolarMonth';
import {ExactDate} from './ExactDate';

export class SolarHalfYear {

    private _year: number;
    private _month: number;
    private _calendar: Date;

    static fromYm(year: number, month: number): SolarHalfYear {
        return new SolarHalfYear(year, month);
    }

    static fromDate(date: Date): SolarHalfYear {
        return SolarHalfYear.fromYm(date.getFullYear(), date.getMonth() + 1);
    }

    constructor(year: number, month: number) {
        this._year = year;
        this._month = month;
        this._calendar = ExactDate.fromYmd(year, month, 1);
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
        if (0 === halfYears) {
            return SolarHalfYear.fromYm(this._year, this._month);
        }
        const date = ExactDate.fromYmd(this._year, this._month, 1);
        date.setMonth(date.getMonth() + 6 * halfYears);
        return SolarHalfYear.fromDate(date);
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
