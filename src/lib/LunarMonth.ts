import {LunarUtil} from './LunarUtil';
import {LunarYear} from './LunarYear';
import {Solar} from './Solar';
import {NineStar} from './NineStar';

export class LunarMonth {

    private readonly _year: number;
    private readonly _month: number;
    private readonly _dayCount: number;
    private readonly _firstJulianDay: number;
    private readonly _index: number;
    private readonly _zhiIndex: number;

    static fromYm(lunarYear: number, lunarMonth: number): LunarMonth | null {
        return LunarYear.fromYear(lunarYear).getMonth(lunarMonth);
    }

    constructor(lunarYear: number, lunarMonth: number, dayCount: number, firstJulianDay: number, index: number) {
        this._year = lunarYear;
        this._month = lunarMonth;
        this._dayCount = dayCount;
        this._firstJulianDay = firstJulianDay;
        this._index = index;
        this._zhiIndex = (Math.abs(lunarMonth) - 1 + LunarUtil.BASE_MONTH_ZHI_INDEX) % 12;
    }

    getYear(): number {
        return this._year;
    }

    getMonth(): number {
        return this._month;
    }

    getIndex(): number {
        return this._index;
    }

    getGanIndex(): number {
        const offset = (LunarYear.fromYear(this._year).getGanIndex() + 1) % 5 * 2;
        return (Math.abs(this._month) - 1 + offset) % 10;
    }

    getZhiIndex(): number {
        return this._zhiIndex;
    }

    getGan(): string {
        return LunarUtil.GAN[this.getGanIndex() + 1];
    }

    getZhi(): string {
        return LunarUtil.ZHI[this._zhiIndex + 1];
    }

    getGanZhi(): string {
        return this.getGan() + this.getZhi();
    }

    isLeap(): boolean {
        return this._month < 0;
    }

    getDayCount(): number {
        return this._dayCount;
    }

    getFirstJulianDay(): number {
        return this._firstJulianDay;
    }

    getPositionXi(): string {
        return LunarUtil.POSITION_XI[this.getGanIndex() + 1];
    }

    getPositionXiDesc(): string {
        return LunarUtil.POSITION_DESC[this.getPositionXi()];
    }

    getPositionYangGui(): string {
        return LunarUtil.POSITION_YANG_GUI[this.getGanIndex() + 1];
    }

    getPositionYangGuiDesc(): string {
        return LunarUtil.POSITION_DESC[this.getPositionYangGui()];
    }

    getPositionYinGui(): string {
        return LunarUtil.POSITION_YIN_GUI[this.getGanIndex() + 1];
    }

    getPositionYinGuiDesc(): string {
        return LunarUtil.POSITION_DESC[this.getPositionYinGui()];
    }

    getPositionFu(sect: number = 2): string {
        return (1 == sect ? LunarUtil.POSITION_FU : LunarUtil.POSITION_FU_2)[this.getGanIndex() + 1];
    }

    getPositionFuDesc(sect: number = 2): string {
        return LunarUtil.POSITION_DESC[this.getPositionFu(sect)];
    }

    getPositionCai(): string {
        return LunarUtil.POSITION_CAI[this.getGanIndex() + 1];
    }

    getPositionCaiDesc(): string {
        return LunarUtil.POSITION_DESC[this.getPositionCai()];
    }

    getPositionTaiSui(): string {
        const m = Math.abs(this._month);
        switch (m) {
            case 1:
            case 5:
            case 9:
                return '艮';
            case 3:
            case 7:
            case 11:
                return '坤';
            case 4:
            case 8:
            case 12:
                return '巽';
        }
        return LunarUtil.POSITION_GAN[Solar.fromJulianDay(this.getFirstJulianDay()).getLunar().getMonthGanIndex()];
    }

    getPositionTaiSuiDesc(): string {
        return LunarUtil.POSITION_DESC[this.getPositionTaiSui()];
    }

    getNineStar(): NineStar {
        const index = LunarYear.fromYear(this._year).getZhiIndex() % 3;
        const m = Math.abs(this._month);
        const monthZhiIndex = (13 + m) % 12;
        let n = 27 - (index * 3);
        if (monthZhiIndex < LunarUtil.BASE_MONTH_ZHI_INDEX) {
            n -= 3;
        }
        const offset = (n - monthZhiIndex) % 9;
        return NineStar.fromIndex(offset);
    }

    toString(): string {
        return `${this.getYear()}年${this.isLeap() ? '闰' : ''}${LunarUtil.MONTH[Math.abs(this.getMonth())]}月(${this.getDayCount()})天`;
    }

    next(n: number): LunarMonth | null {
        if (0 == n) {
            return LunarMonth.fromYm(this._year, this._month);
        } else {
            let rest = Math.abs(n);
            let ny = this._year;
            let iy = ny;
            let im = this._month;
            let index = 0;
            let months = LunarYear.fromYear(ny).getMonths();
            if (n > 0) {
                while (true) {
                    const size = months.length;
                    for (let i = 0; i < size; i++) {
                        const m = months[i];
                        if (m.getYear() === iy && m.getMonth() === im) {
                            index = i;
                            break;
                        }
                    }
                    const more = size - index - 1;
                    if (rest < more) {
                        break;
                    }
                    rest -= more;
                    const lastMonth = months[size - 1];
                    iy = lastMonth.getYear();
                    im = lastMonth.getMonth();
                    ny++;
                    months = LunarYear.fromYear(ny).getMonths();
                }
                return months[index + rest];
            } else {
                while (true) {
                    const size = months.length;
                    for (let i = 0; i < size; i++) {
                        const m = months[i];
                        if (m.getYear() === iy && m.getMonth() === im) {
                            index = i;
                            break;
                        }
                    }
                    if (rest <= index) {
                        break;
                    }
                    rest -= index;
                    const firstMonth = months[0];
                    iy = firstMonth.getYear();
                    im = firstMonth.getMonth();
                    ny--;
                    months = LunarYear.fromYear(ny).getMonths();
                }
                return months[index - rest];
            }
        }
    }
}
