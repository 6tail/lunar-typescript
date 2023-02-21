import {SolarMonth} from './SolarMonth';

export class SolarSeason {

    private readonly _year: number;
    private readonly _month: number;

    static fromYm(year: number, month: number): SolarSeason {
        return new SolarSeason(year, month);
    }

    static fromDate(date: Date): SolarSeason {
        return SolarSeason.fromYm(date.getFullYear(), date.getMonth() + 1);
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
        return Math.ceil(this._month / 3);
    }

    next(seasons: number): SolarSeason {
        const month = SolarMonth.fromYm(this._year, this._month).next(3 * seasons);
        return SolarSeason.fromYm(month.getYear(), month.getMonth());
    }

    getMonths(): SolarMonth[] {
        const l: SolarMonth[] = [];
        const index = this.getIndex() - 1;
        for (let i = 0; i < 3; i++) {
            l.push(SolarMonth.fromYm(this._year, 3 * index + i + 1));
        }
        return l;
    }

    toString(): string {
        return `${this.getYear()}.${this.getIndex()}`;
    }

    toFullString(): string {
        return `${this.getYear()}年${this.getIndex()}季度`;
    }
}
