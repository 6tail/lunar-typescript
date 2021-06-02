import {Solar} from './Solar';
import {SolarUtil} from './SolarUtil';
import {LunarUtil} from './LunarUtil';
import {JieQi} from './JieQi';
import {EightChar} from './EightChar';
import {NineStar} from './NineStar';
import {Dictionary} from './Dictionary';
import {ShuJiu} from './ShuJiu';
import {Fu} from './Fu';
import {LunarYear} from './LunarYear';
import {ExactDate} from './ExactDate';

interface LunarInfo {
    timeGanIndex: number;
    timeZhiIndex: number;
    dayGanIndex: number;
    dayZhiIndex: number;
    dayGanIndexExact: number;
    dayZhiIndexExact: number;
    dayGanIndexExact2: number;
    dayZhiIndexExact2: number;
    monthGanIndex: number;
    monthZhiIndex: number;
    monthGanIndexExact: number;
    monthZhiIndexExact: number;
    yearGanIndex: number;
    yearZhiIndex: number;
    yearGanIndexByLiChun: number;
    yearZhiIndexByLiChun: number;
    yearGanIndexExact: number;
    yearZhiIndexExact: number;
    weekIndex: number;
    jieQi: Dictionary<Solar>;
    jieQiList: string[];
}

export class Lunar {
    private static MS_PER_DAY: number = 86400000;
    static JIE_QI: string[] = ['冬至', '小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪'];
    static JIE_QI_IN_USE: string[] = ['DA_XUE', '冬至', '小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', 'DONG_ZHI', 'XIAO_HAN', 'DA_HAN', 'LI_CHUN'];

    private _year: number;
    private _month: number;
    private _day: number;
    private _hour: number;
    private _minute: number;
    private _second: number;
    private _timeGanIndex: number;
    private _timeZhiIndex: number;
    private _dayGanIndex: number;
    private _dayZhiIndex: number;
    private _dayGanIndexExact: number;
    private _dayZhiIndexExact: number;
    private _dayGanIndexExact2: number;
    private _dayZhiIndexExact2: number;
    private _monthGanIndex: number;
    private _monthZhiIndex: number;
    private _monthGanIndexExact: number;
    private _monthZhiIndexExact: number;
    private _yearGanIndex: number;
    private _yearZhiIndex: number;
    private _yearGanIndexByLiChun: number;
    private _yearZhiIndexByLiChun: number;
    private _yearGanIndexExact: number;
    private _yearZhiIndexExact: number;
    private _weekIndex: number;
    private _jieQi: Dictionary<Solar>;
    private _jieQiList: string[];
    private _solar: Solar;
    private _eightChar: EightChar;

    static fromYmd(lunarYear: number, lunarMonth: number, lunarDay: number): Lunar {
        return Lunar.fromYmdHms(lunarYear, lunarMonth, lunarDay, 0, 0, 0);
    }

    static fromYmdHms(lunarYear: number, lunarMonth: number, lunarDay: number, hour: number, minute: number, second: number): Lunar {
        const y = LunarYear.fromYear(lunarYear);
        const m = y.getMonth(lunarMonth);
        if (null == m) {
            throw `wrong lunar year ${lunarYear} month ${lunarMonth}`;
        }
        if (lunarDay < 1) {
            throw 'lunar day must bigger than 0';
        }
        const days = m.getDayCount();
        if (lunarDay > days) {
            throw `only ${days} days in lunar year ${lunarYear} month ${lunarMonth}`;
        }
        const noon = Solar.fromJulianDay(m.getFirstJulianDay() + lunarDay - 1);
        const solar = Solar.fromYmdHms(noon.getYear(), noon.getMonth(), noon.getDay(), hour, minute, second);
        return new Lunar(lunarYear, lunarMonth, lunarDay, hour, minute, second, solar, y);
    }

    static fromDate(date: Date): Lunar {
        const c = ExactDate.fromYmd(date.getFullYear(), date.getMonth() + 1, date.getDate());
        const solarTime = c.getTime();
        let lunarYear = 0;
        let lunarMonth = 0;
        let lunarDay = 0;
        let y = c.getFullYear();
        const ly = LunarYear.fromYear(y);
        const lms = ly.getMonths();
        for (let i = 0, j = lms.length; i < j; i++) {
            const m = lms[i];
            // 初一
            const firstDay = Solar.fromJulianDay(m.getFirstJulianDay()).getCalendar();
            firstDay.setHours(0);
            firstDay.setMinutes(0);
            firstDay.setSeconds(0);
            firstDay.setMilliseconds(0);
            const days = Math.floor((solarTime - firstDay.getTime()) / Lunar.MS_PER_DAY);
            if (days < m.getDayCount()) {
                lunarYear = m.getYear();
                lunarMonth = m.getMonth();
                lunarDay = days + 1;
                break;
            }
        }
        return new Lunar(lunarYear, lunarMonth, lunarDay, date.getHours(), date.getMinutes(), date.getSeconds(), Solar.fromDate(date), ly);
    }

    private static _computeJieQi(o: LunarInfo, ly: LunarYear) {
        const julianDays = ly.getJieQiJulianDays();
        for (let i = 0, j = Lunar.JIE_QI_IN_USE.length; i < j; i++) {
            const key = Lunar.JIE_QI_IN_USE[i];
            o.jieQiList.push(key);
            o.jieQi.set(key, Solar.fromJulianDay(julianDays[i]));
        }
    }

    private static _computeYear(o: LunarInfo, solar: Solar, year: number) {
        //以正月初一开始
        const offset = year - 4;
        let yearGanIndex = offset % 10;
        let yearZhiIndex = offset % 12;

        //以立春作为新一年的开始的干支纪年
        let g = yearGanIndex;
        let z = yearZhiIndex;

        //精确的干支纪年，以立春交接时刻为准
        let gExact = yearGanIndex;
        let zExact = yearZhiIndex;

        const solarYear = solar.getYear();
        const solarYmd = solar.toYmd();
        const solarYmdHms = solar.toYmdHms();

        //获取立春的阳历时刻
        let liChun = o.jieQi.get('立春');
        if (liChun.getYear() != solarYear) {
            liChun = o.jieQi.get('LI_CHUN');
        }
        const liChunYmd = liChun.toYmd();
        const liChunYmdHms = liChun.toYmdHms();

        //阳历和阴历年份相同代表正月初一及以后
        if (year === solarYear) {
            //立春日期判断
            if (solarYmd < liChunYmd) {
                g--;
                z--;
            }
            //立春交接时刻判断
            if (solarYmdHms < liChunYmdHms) {
                gExact--;
                zExact--;
            }
        } else if (year < solarYear) {
            if (solarYmd >= liChunYmd) {
                g++;
                z++;
            }
            if (solarYmdHms >= liChunYmdHms) {
                gExact++;
                zExact++;
            }
        }

        o.yearGanIndex = yearGanIndex;
        o.yearZhiIndex = yearZhiIndex;
        o.yearGanIndexByLiChun = (g < 0 ? g + 10 : g) % 10;
        o.yearZhiIndexByLiChun = (z < 0 ? z + 12 : z) % 12;
        o.yearGanIndexExact = (gExact < 0 ? gExact + 10 : gExact) % 10;
        o.yearZhiIndexExact = (zExact < 0 ? zExact + 12 : zExact) % 12;
    }

    private static _computeMonth(o: LunarInfo, solar: Solar) {
        let start = null, i;
        let end;
        const ymd = solar.toYmd();
        const time = solar.toYmdHms();
        const size = Lunar.JIE_QI_IN_USE.length;

        //序号：大雪以前-3，大雪到小寒之间-2，小寒到立春之间-1，立春之后0
        let index = -3;
        for (i = 0; i < size; i += 2) {
            end = o.jieQi.get(Lunar.JIE_QI_IN_USE[i]);
            let symd = null == start ? ymd : start.toYmd();
            if (ymd >= symd && ymd < end.toYmd()) {
                break;
            }
            start = end;
            index++;
        }
        let offset = (((o.yearGanIndexByLiChun + (index < 0 ? 1 : 0)) % 5 + 1) * 2) % 10;
        o.monthGanIndex = ((index < 0 ? index + 10 : index) + offset) % 10;
        o.monthZhiIndex = ((index < 0 ? index + 12 : index) + LunarUtil.BASE_MONTH_ZHI_INDEX) % 12;

        start = null;
        index = -3;
        for (i = 0; i < size; i += 2) {
            end = o.jieQi.get(Lunar.JIE_QI_IN_USE[i]);
            let stime = null == start ? time : start.toYmdHms();
            if (time >= stime && time < end.toYmdHms()) {
                break;
            }
            start = end;
            index++;
        }
        offset = (((o.yearGanIndexExact + (index < 0 ? 1 : 0)) % 5 + 1) * 2) % 10;
        o.monthGanIndexExact = ((index < 0 ? index + 10 : index) + offset) % 10;
        o.monthZhiIndexExact = ((index < 0 ? index + 12 : index) + LunarUtil.BASE_MONTH_ZHI_INDEX) % 12;
    }

    private static _computeDay(o: LunarInfo, solar: Solar, hour: number, minute: number) {
        const noon = Solar.fromYmdHms(solar.getYear(), solar.getMonth(), solar.getDay(), 12, 0, 0);
        const offset = Math.floor(noon.getJulianDay()) - 11;
        const dayGanIndex = offset % 10;
        const dayZhiIndex = offset % 12;
        o.dayGanIndex = dayGanIndex;
        o.dayZhiIndex = dayZhiIndex;
        let dayGanExact = dayGanIndex;
        let dayZhiExact = dayZhiIndex;
        o.dayGanIndexExact2 = dayGanExact;
        o.dayZhiIndexExact2 = dayZhiExact;
        const hm = (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute;
        if (hm >= '23:00' && hm <= '23:59') {
            dayGanExact++;
            if (dayGanExact >= 10) {
                dayGanExact -= 10;
            }
            dayZhiExact++;
            if (dayZhiExact >= 12) {
                dayZhiExact -= 12;
            }
        }
        o.dayGanIndexExact = dayGanExact;
        o.dayZhiIndexExact = dayZhiExact;
    }

    private static _computeTime(o: LunarInfo, hour: number, minute: number) {
        const timeZhiIndex = LunarUtil.getTimeZhiIndex((hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute);
        o.timeZhiIndex = timeZhiIndex;
        o.timeGanIndex = (o.dayGanIndexExact % 5 * 2 + timeZhiIndex) % 10;
    }

    private static _computeWeek(o: LunarInfo, solar: Solar) {
        o.weekIndex = solar.getWeek();
    }

    private static _compute(year: number, hour: number, minute: number, solar: Solar, ly: LunarYear): LunarInfo {
        const o: LunarInfo = {
            timeGanIndex: 0,
            timeZhiIndex: 0,
            dayGanIndex: 0,
            dayZhiIndex: 0,
            dayGanIndexExact: 0,
            dayZhiIndexExact: 0,
            dayGanIndexExact2: 0,
            dayZhiIndexExact2: 0,
            monthGanIndex: 0,
            monthZhiIndex: 0,
            monthGanIndexExact: 0,
            monthZhiIndexExact: 0,
            yearGanIndex: 0,
            yearZhiIndex: 0,
            yearGanIndexByLiChun: 0,
            yearZhiIndexByLiChun: 0,
            yearGanIndexExact: 0,
            yearZhiIndexExact: 0,
            weekIndex: 0,
            jieQi: new Dictionary<Solar>(),
            jieQiList: []
        };
        Lunar._computeJieQi(o, ly);
        Lunar._computeYear(o, solar, year);
        Lunar._computeMonth(o, solar);
        Lunar._computeDay(o, solar, hour, minute);
        Lunar._computeTime(o, hour, minute);
        Lunar._computeWeek(o, solar);
        return o;
    }

    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, solar: Solar, ly: LunarYear) {
        const info = Lunar._compute(year, hour, minute, solar, ly);

        this._year = year;
        this._month = month;
        this._day = day;
        this._hour = hour;
        this._minute = minute;
        this._second = second;

        this._timeGanIndex = info.timeGanIndex;
        this._timeZhiIndex = info.timeZhiIndex;
        this._dayGanIndex = info.dayGanIndex;
        this._dayZhiIndex = info.dayZhiIndex;
        this._dayGanIndexExact = info.dayGanIndexExact;
        this._dayZhiIndexExact = info.dayZhiIndexExact;
        this._dayGanIndexExact2 = info.dayGanIndexExact2;
        this._dayZhiIndexExact2 = info.dayZhiIndexExact2;
        this._monthGanIndex = info.monthGanIndex;
        this._monthZhiIndex = info.monthZhiIndex;
        this._monthGanIndexExact = info.monthGanIndexExact;
        this._monthZhiIndexExact = info.monthZhiIndexExact;
        this._yearGanIndex = info.yearGanIndex;
        this._yearZhiIndex = info.yearZhiIndex;
        this._yearGanIndexByLiChun = info.yearGanIndexByLiChun;
        this._yearZhiIndexByLiChun = info.yearZhiIndexByLiChun;
        this._yearGanIndexExact = info.yearGanIndexExact;
        this._yearZhiIndexExact = info.yearZhiIndexExact;
        this._weekIndex = info.weekIndex;
        this._jieQi = info.jieQi;
        this._jieQiList = info.jieQiList;
        this._solar = solar;
        this._eightChar = new EightChar(this);
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

    getTimeGanIndex(): number {
        return this._timeGanIndex;
    }

    getTimeZhiIndex(): number {
        return this._timeZhiIndex;
    }

    getDayGanIndex(): number {
        return this._dayGanIndex;
    }

    getDayZhiIndex(): number {
        return this._dayZhiIndex;
    }


    getMonthGanIndex(): number {
        return this._monthGanIndex;
    }

    getMonthZhiIndex(): number {
        return this._monthZhiIndex;
    }

    getYearGanIndex(): number {
        return this._yearGanIndex;
    }

    getYearZhiIndex(): number {
        return this._yearZhiIndex;
    }

    getYearGanIndexByLiChun(): number {
        return this._yearGanIndexByLiChun;
    }

    getYearZhiIndexByLiChun(): number {
        return this._yearZhiIndexByLiChun;
    }

    getDayGanIndexExact(): number {
        return this._dayGanIndexExact;
    }

    getDayZhiIndexExact(): number {
        return this._dayZhiIndexExact;
    }

    getDayGanIndexExact2(): number {
        return this._dayGanIndexExact2;
    }

    getDayZhiIndexExact2(): number {
        return this._dayZhiIndexExact2;
    }

    getMonthGanIndexExact(): number {
        return this._monthGanIndexExact;
    }

    getMonthZhiIndexExact(): number {
        return this._monthZhiIndexExact;
    }

    getYearGanIndexExact(): number {
        return this._yearGanIndexExact;
    }

    getYearZhiIndexExact(): number {
        return this._yearZhiIndexExact;
    }

    getGan(): string {
        return this.getYearGan();
    }

    getZhi(): string {
        return this.getYearZhi();
    }

    getYearGan(): string {
        return LunarUtil.GAN[this._yearGanIndex + 1];
    }

    getYearGanByLiChun(): string {
        return LunarUtil.GAN[this._yearGanIndexByLiChun + 1];
    }

    getYearGanExact(): string {
        return LunarUtil.GAN[this._yearGanIndexExact + 1];
    }

    getYearZhi(): string {
        return LunarUtil.ZHI[this._yearZhiIndex + 1];
    }

    getYearZhiByLiChun(): string {
        return LunarUtil.ZHI[this._yearZhiIndexByLiChun + 1];
    }

    getYearZhiExact(): string {
        return LunarUtil.ZHI[this._yearZhiIndexExact + 1];
    }

    getYearInGanZhi(): string {
        return this.getYearGan() + this.getYearZhi();
    }

    getYearInGanZhiByLiChun(): string {
        return this.getYearGanByLiChun() + this.getYearZhiByLiChun();
    }

    getYearInGanZhiExact(): string {
        return this.getYearGanExact() + this.getYearZhiExact();
    }

    getMonthGan(): string {
        return LunarUtil.GAN[this._monthGanIndex + 1];
    }

    getMonthGanExact(): string {
        return LunarUtil.GAN[this._monthGanIndexExact + 1];
    }

    getMonthZhi(): string {
        return LunarUtil.ZHI[this._monthZhiIndex + 1];
    }

    getMonthZhiExact(): string {
        return LunarUtil.ZHI[this._monthZhiIndexExact + 1];
    }

    getMonthInGanZhi(): string {
        return this.getMonthGan() + this.getMonthZhi();
    }

    getMonthInGanZhiExact(): string {
        return this.getMonthGanExact() + this.getMonthZhiExact();
    }

    getDayGan(): string {
        return LunarUtil.GAN[this._dayGanIndex + 1];
    }

    getDayGanExact(): string {
        return LunarUtil.GAN[this._dayGanIndexExact + 1];
    }

    getDayGanExact2(): string {
        return LunarUtil.GAN[this._dayGanIndexExact2 + 1];
    }

    getDayZhi(): string {
        return LunarUtil.ZHI[this._dayZhiIndex + 1];
    }

    getDayZhiExact(): string {
        return LunarUtil.ZHI[this._dayZhiIndexExact + 1];
    }

    getDayZhiExact2(): string {
        return LunarUtil.ZHI[this._dayZhiIndexExact2 + 1];
    }

    getDayInGanZhi(): string {
        return this.getDayGan() + this.getDayZhi();
    }

    getDayInGanZhiExact(): string {
        return this.getDayGanExact() + this.getDayZhiExact();
    }

    getDayInGanZhiExact2(): string {
        return this.getDayGanExact2() + this.getDayZhiExact2();
    }

    getTimeGan(): string {
        return LunarUtil.GAN[this._timeGanIndex + 1];
    }

    getTimeZhi(): string {
        return LunarUtil.ZHI[this._timeZhiIndex + 1];
    }

    getTimeInGanZhi(): string {
        return this.getTimeGan() + this.getTimeZhi();
    }

    getShengxiao(): string {
        return this.getYearShengXiao();
    }

    getYearShengXiao(): string {
        return LunarUtil.SHENGXIAO[this._yearZhiIndex + 1];
    }

    getYearShengXiaoByLiChun(): string {
        return LunarUtil.SHENGXIAO[this._yearZhiIndexByLiChun + 1];
    }

    getYearShengXiaoExact(): string {
        return LunarUtil.SHENGXIAO[this._yearZhiIndexExact + 1];
    }

    getMonthShengXiao(): string {
        return LunarUtil.SHENGXIAO[this._monthZhiIndex + 1];
    }

    getMonthShengXiaoExact(): string {
        return LunarUtil.SHENGXIAO[this._monthZhiIndexExact + 1];
    }

    getDayShengXiao(): string {
        return LunarUtil.SHENGXIAO[this._dayZhiIndex + 1];
    }

    getTimeShengXiao(): string {
        return LunarUtil.SHENGXIAO[this._timeZhiIndex + 1];
    }

    getYearInChinese(): string {
        const y = (this._year + '');
        let s = '';
        const zero: number = '0'.charCodeAt(0);
        for (let i = 0, j = y.length; i < j; i++) {
            const n: number = y.charCodeAt(i);
            s += LunarUtil.NUMBER[n - zero];
        }
        return s;
    }

    getMonthInChinese(): string {
        return (this._month < 0 ? '闰' : '') + LunarUtil.MONTH[Math.abs(this._month)];
    }

    getDayInChinese(): string {
        return LunarUtil.DAY[this._day];
    }

    getPengZuGan(): string {
        return LunarUtil.PENGZU_GAN[this._dayGanIndex + 1];
    }

    getPengZuZhi(): string {
        return LunarUtil.PENGZU_ZHI[this._dayZhiIndex + 1];
    }

    getPositionXi(): string {
        return this.getDayPositionXi();
    }

    getPositionXiDesc(): string {
        return this.getDayPositionXiDesc();
    }

    getPositionYangGui(): string {
        return this.getDayPositionYangGui();
    }

    getPositionYangGuiDesc(): string {
        return this.getDayPositionYangGuiDesc();
    }

    getPositionYinGui(): string {
        return this.getDayPositionYinGui();
    }

    getPositionYinGuiDesc(): string {
        return this.getDayPositionYinGuiDesc();
    }

    getPositionFu(): string {
        return this.getDayPositionFu();
    }

    getPositionFuDesc(): string {
        return this.getDayPositionFuDesc();
    }

    getPositionCai(): string {
        return this.getDayPositionCai();
    }

    getPositionCaiDesc(): string {
        return this.getDayPositionCaiDesc();
    }

    getDayPositionXi(): string {
        return LunarUtil.POSITION_XI[this._dayGanIndex + 1];
    }

    getDayPositionXiDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getDayPositionXi());
        return v ? v : '';
    }

    getDayPositionYangGui(): string {
        return LunarUtil.POSITION_YANG_GUI[this._dayGanIndex + 1];
    }

    getDayPositionYangGuiDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getDayPositionYangGui());
        return v ? v : '';
    }

    getDayPositionYinGui(): string {
        return LunarUtil.POSITION_YIN_GUI[this._dayGanIndex + 1];
    }

    getDayPositionYinGuiDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getDayPositionYinGui());
        return v ? v : '';
    }

    getDayPositionFu(): string {
        return LunarUtil.POSITION_FU[this._dayGanIndex + 1];
    }

    getDayPositionFuDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getDayPositionFu());
        return v ? v : '';
    }

    getDayPositionCai(): string {
        return LunarUtil.POSITION_CAI[this._dayGanIndex + 1];
    }

    getDayPositionCaiDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getDayPositionCai());
        return v ? v : '';
    }

    getTimePositionXi(): string {
        return LunarUtil.POSITION_XI[this._timeGanIndex + 1];
    }

    getTimePositionXiDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getTimePositionXi());
        return v ? v : '';
    }

    getTimePositionYangGui(): string {
        return LunarUtil.POSITION_YANG_GUI[this._timeGanIndex + 1];
    }

    getTimePositionYangGuiDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getTimePositionYangGui());
        return v ? v : '';
    }

    getTimePositionYinGui(): string {
        return LunarUtil.POSITION_YIN_GUI[this._timeGanIndex + 1];
    }

    getTimePositionYinGuiDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getTimePositionYinGui());
        return v ? v : '';
    }

    getTimePositionFu(): string {
        return LunarUtil.POSITION_FU[this._timeGanIndex + 1];
    }

    getTimePositionFuDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getTimePositionFu());
        return v ? v : '';
    }

    getTimePositionCai(): string {
        return LunarUtil.POSITION_CAI[this._timeGanIndex + 1];
    }

    getTimePositionCaiDesc(): string {
        const v = LunarUtil.POSITION_DESC.get(this.getTimePositionCai());
        return v ? v : '';
    }

    getChong(): string {
        return this.getDayChong();
    }

    getChongGan(): string {
        return this.getDayChongGan();
    }

    getChongGanTie(): string {
        return this.getDayChongGanTie();
    }

    getChongShengXiao(): string {
        return this.getDayChongShengXiao();
    }

    getChongDesc(): string {
        return this.getDayChongDesc();
    }

    getSha(): string {
        return this.getDaySha();
    }

    getDayChong(): string {
        const v = LunarUtil.CHONG.get(this.getDayZhi());
        return v ? v : '';
    }

    getDayChongGan(): string {
        const v = LunarUtil.CHONG_GAN.get(this.getDayGan());
        return v ? v : '';
    }

    getDayChongGanTie(): string {
        const v = LunarUtil.CHONG_GAN_TIE.get(this.getDayGan());
        return v ? v : '';
    }

    getDayChongShengXiao(): string {
        const chong = this.getChong();
        for (let i = 0, j = LunarUtil.ZHI.length; i < j; i++) {
            if (LunarUtil.ZHI[i] === chong) {
                return LunarUtil.SHENGXIAO[i];
            }
        }
        return '';
    }

    getDayChongDesc(): string {
        return '(' + this.getDayChongGan() + this.getDayChong() + ')' + this.getDayChongShengXiao();
    }

    getDaySha(): string {
        const v = LunarUtil.SHA.get(this.getDayZhi());
        return v ? v : '';
    }

    getTimeChong(): string {
        const v = LunarUtil.CHONG.get(this.getTimeZhi());
        return v ? v : '';
    }

    getTimeChongGan(): string {
        const v = LunarUtil.CHONG_GAN.get(this.getTimeGan());
        return v ? v : '';
    }

    getTimeChongGanTie(): string {
        const v = LunarUtil.CHONG_GAN_TIE.get(this.getTimeGan());
        return v ? v : '';
    }

    getTimeChongShengXiao(): string {
        const chong = this.getTimeChong();
        for (let i = 0, j = LunarUtil.ZHI.length; i < j; i++) {
            if (LunarUtil.ZHI[i] === chong) {
                return LunarUtil.SHENGXIAO[i];
            }
        }
        return '';
    }

    getTimeChongDesc(): string {
        return '(' + this.getTimeChongGan() + this.getTimeChong() + ')' + this.getTimeChongShengXiao();
    }

    getTimeSha(): string {
        const v = LunarUtil.SHA.get(this.getTimeZhi());
        return v ? v : '';
    }

    getYearNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getYearInGanZhi());
        return v ? v : '';
    }

    getMonthNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getMonthInGanZhi());
        return v ? v : '';
    }

    getDayNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getDayInGanZhi());
        return v ? v : '';
    }

    getTimeNaYin(): string {
        const v = LunarUtil.NAYIN.get(this.getTimeInGanZhi());
        return v ? v : '';
    }

    getSeason(): string {
        return LunarUtil.SEASON[Math.abs(this._month)];
    }

    _convertJieQi(name: string): string {
        let jq = name;
        if ('DONG_ZHI' === jq) {
            jq = '冬至';
        } else if ('DA_HAN' === jq) {
            jq = '大寒';
        } else if ('XIAO_HAN' === jq) {
            jq = '小寒';
        } else if ('LI_CHUN' === jq) {
            jq = '立春';
        } else if ('DA_XUE' === jq) {
            jq = '大雪';
        }
        return jq;
    }

    getJie(): string {
        let d, jie = '';
        for (let i = 1, j = Lunar.JIE_QI.length; i < j; i += 2) {
            const key = Lunar.JIE_QI[i];
            d = this._jieQi.get(key);
            if (d && d.getYear() === this._solar.getYear() && d.getMonth() === this._solar.getMonth() && d.getDay() === this._solar.getDay()) {
                jie = key;
                break;
            }
        }
        return this._convertJieQi(jie);
    }

    getQi(): string {
        let d, qi = '';
        for (let i = 0, j = Lunar.JIE_QI.length; i < j; i += 2) {
            const key = Lunar.JIE_QI[i];
            d = this._jieQi.get(key);
            if (d && d.getYear() === this._solar.getYear() && d.getMonth() === this._solar.getMonth() && d.getDay() === this._solar.getDay()) {
                qi = key;
                break;
            }
        }
        return this._convertJieQi(qi);
    }

    getJieQi(): string {
        let name = '';
        this._jieQi.forEach((k, d) => {
            if (d.getYear() == this._solar.getYear() && d.getMonth() == this._solar.getMonth() && d.getDay() == this._solar.getDay()) {
                name = k;
                return false;
            }
        });
        return this._convertJieQi(name);
    }

    getWeek(): number {
        return this._weekIndex;
    }

    getWeekInChinese(): string {
        return SolarUtil.WEEK[this.getWeek()];
    }

    getXiu(): string {
        let v = LunarUtil.XIU.get(this.getDayZhi() + this.getWeek());
        return v ? v : '';
    }

    getXiuLuck(): string {
        let v = LunarUtil.XIU_LUCK.get(this.getXiu());
        return v ? v : '';
    }

    getXiuSong(): string {
        let v = LunarUtil.XIU_SONG.get(this.getXiu());
        return v ? v : '';
    }

    getZheng(): string {
        let v = LunarUtil.ZHENG.get(this.getXiu());
        return v ? v : '';
    }

    getAnimal(): string {
        let v = LunarUtil.ANIMAL.get(this.getXiu());
        return v ? v : '';
    }

    getGong(): string {
        let v = LunarUtil.GONG.get(this.getXiu());
        return v ? v : '';
    }

    getShou(): string {
        let v = LunarUtil.SHOU.get(this.getGong());
        return v ? v : '';
    }

    getFestivals(): string[] {
        const l: string[] = [];
        const f = LunarUtil.FESTIVAL.get(this._month + '-' + this._day);
        if (f) {
            l.push(f);
        }
        if (Math.abs(this._month) == 12 && this._day >= 29 && this._year != this.next(1).getYear()) {
            l.push('除夕');
        }
        return l;
    }

    getOtherFestivals(): string[] {
        const l: string[] = [];
        const fs = LunarUtil.OTHER_FESTIVAL.get(this._month + '-' + this._day);
        if (fs) {
            fs.forEach(f => {
                l.push(f);
            });
        }
        return l;
    }

    getBaZi(): string[] {
        const bz = this.getEightChar();
        const l: string[] = [];
        l.push(bz.getYear());
        l.push(bz.getMonth());
        l.push(bz.getDay());
        l.push(bz.getTime());
        return l;
    }

    getBaZiWuXing(): string[] {
        const bz = this.getEightChar();
        const l: string[] = [];
        l.push(bz.getYearWuXing());
        l.push(bz.getMonthWuXing());
        l.push(bz.getDayWuXing());
        l.push(bz.getTimeWuXing());
        return l;
    }

    getBaZiNaYin(): string[] {
        const bz = this.getEightChar();
        const l: string[] = [];
        l.push(bz.getYearNaYin());
        l.push(bz.getMonthNaYin());
        l.push(bz.getDayNaYin());
        l.push(bz.getTimeNaYin());
        return l;
    }

    getBaZiShiShenGan(): string[] {
        const bz = this.getEightChar();
        const l: string[] = [];
        l.push(bz.getYearShiShenGan());
        l.push(bz.getMonthShiShenGan());
        l.push(bz.getDayShiShenGan());
        l.push(bz.getTimeShiShenGan());
        return l;
    }

    getBaZiShiShenZhi(): string[] {
        const bz = this.getEightChar();
        const l: string[] = [];
        l.push(bz.getYearShiShenZhi()[0]);
        l.push(bz.getMonthShiShenZhi()[0]);
        l.push(bz.getDayShiShenZhi()[0]);
        l.push(bz.getTimeShiShenZhi()[0]);
        return l;
    }

    getBaZiShiShenYearZhi(): string[] {
        return this.getEightChar().getYearShiShenZhi();
    }

    getBaZiShiShenMonthZhi(): string[] {
        return this.getEightChar().getMonthShiShenZhi();
    }

    getBaZiShiShenDayZhi(): string[] {
        return this.getEightChar().getDayShiShenZhi();
    }

    getBaZiShiShenTimeZhi(): string[] {
        return this.getEightChar().getTimeShiShenZhi();
    }

    getZhiXing(): string {
        let offset = this._dayZhiIndex - this._monthZhiIndex;
        if (offset < 0) {
            offset += 12;
        }
        return LunarUtil.ZHI_XING[offset + 1];
    }

    getDayTianShen(): string {
        const monthZhi = this.getMonthZhi();
        const offset = LunarUtil.ZHI_TIAN_SHEN_OFFSET.get(monthZhi);
        if (offset == undefined) {
            return '';
        }
        return LunarUtil.TIAN_SHEN[(this._dayZhiIndex + offset) % 12 + 1];
    }

    getTimeTianShen(): string {
        const dayZhi = this.getDayZhiExact();
        const offset = LunarUtil.ZHI_TIAN_SHEN_OFFSET.get(dayZhi);
        if (offset == undefined) {
            return '';
        }
        return LunarUtil.TIAN_SHEN[(this._timeZhiIndex + offset) % 12 + 1];
    }

    getDayTianShenType(): string {
        const v = LunarUtil.TIAN_SHEN_TYPE.get(this.getDayTianShen());
        return v ? v : '';
    }

    getTimeTianShenType(): string {
        const v = LunarUtil.TIAN_SHEN_TYPE.get(this.getTimeTianShen());
        return v ? v : '';
    }

    getDayTianShenLuck(): string {
        const v = LunarUtil.TIAN_SHEN_TYPE_LUCK.get(this.getDayTianShenType());
        return v ? v : '';
    }

    getTimeTianShenLuck(): string {
        const v = LunarUtil.TIAN_SHEN_TYPE_LUCK.get(this.getTimeTianShenType());
        return v ? v : '';
    }

    getDayPositionTai(): string {
        let offset = this._dayGanIndex - this._dayZhiIndex;
        if (offset < 0) {
            offset += 12;
        }
        return LunarUtil.POSITION_TAI_DAY[offset * 5 + this._dayGanIndex];
    }

    getMonthPositionTai(): string {
        const m = this._month;
        if (m < 0) {
            return '';
        }
        return LunarUtil.POSITION_TAI_MONTH[m - 1];
    }

    getDayYi(): string[] {
        return LunarUtil.getDayYi(this.getMonthInGanZhiExact(), this.getDayInGanZhi());
    }

    getDayJi(): string[] {
        return LunarUtil.getDayJi(this.getMonthInGanZhiExact(), this.getDayInGanZhi());
    }

    getDayJiShen(): string[] {
        return LunarUtil.getDayJiShen(this.getMonth(), this.getDayInGanZhi());
    }

    getDayXiongSha(): string[] {
        return LunarUtil.getDayXiongSha(this.getMonth(), this.getDayInGanZhi());
    }

    getTimeYi(): string[] {
        return LunarUtil.getTimeYi(this.getDayInGanZhiExact(), this.getTimeInGanZhi());
    }

    getTimeJi(): string[] {
        return LunarUtil.getTimeJi(this.getDayInGanZhiExact(), this.getTimeInGanZhi());
    }

    getYueXiang(): string {
        return LunarUtil.YUE_XIANG[this._day];
    }

    getYearNineStar(): NineStar {
        let index = -(this._year - 1900) % 9;
        if (index < 0) {
            index += 9;
        }
        return NineStar.fromIndex(index);
    }

    getMonthNineStar(): NineStar {
        let start = 2;
        let yearZhi = this.getYearZhi();
        if ('子午卯酉'.indexOf(yearZhi) > -1) {
            start = 8;
        } else if ('辰戌丑未'.indexOf(yearZhi) > -1) {
            start = 5;
        }
        // 寅月起，所以需要-2
        let monthIndex = this._monthZhiIndex - 2;
        if (monthIndex < 0) {
            monthIndex += 12;
        }
        let index = start - monthIndex - 1;
        while (index < 0) {
            index += 9;
        }
        return NineStar.fromIndex(index);
    }

    private getJieQiSolar(name: string): any {
        return this._jieQi.get(name);
    }

    getDayNineStar(): NineStar {
        const solarYmd = this._solar.toYmd();
        const yuShui = this.getJieQiSolar('雨水').toYmd();
        const guYu = this.getJieQiSolar('谷雨').toYmd();
        const xiaZhi = this.getJieQiSolar('夏至').toYmd();
        const chuShu = this.getJieQiSolar('处暑').toYmd();
        const shuangJiang = this.getJieQiSolar('霜降').toYmd();

        let start = 6;
        let asc = false;
        if (solarYmd >= this.getJieQiSolar('冬至').toYmd() && solarYmd < yuShui) {
            asc = true;
            start = 1;
        } else if (solarYmd >= yuShui && solarYmd < guYu) {
            asc = true;
            start = 7;
        } else if (solarYmd >= guYu && solarYmd < xiaZhi) {
            asc = true;
            start = 4;
        } else if (solarYmd >= xiaZhi && solarYmd < chuShu) {
            start = 9;
        } else if (solarYmd >= chuShu && solarYmd < shuangJiang) {
            start = 3;
        }
        const ganZhiIndex = LunarUtil.getJiaZiIndex(this.getDayInGanZhi()) % 9;
        let index = asc ? start + ganZhiIndex - 1 : start - ganZhiIndex - 1;
        if (index > 8) {
            index -= 9;
        }
        if (index < 0) {
            index += 9;
        }
        return NineStar.fromIndex(index);
    }

    getTimeNineStar(): NineStar {
        const solarYmd = this._solar.toYmd();
        let asc = false;
        if (solarYmd >= this.getJieQiSolar('冬至').toYmd() && solarYmd < this.getJieQiSolar('夏至').toYmd()) {
            asc = true;
        }
        let start = asc ? 7 : 3;
        let dayZhi = this.getDayZhi();
        if ('子午卯酉'.indexOf(dayZhi) > -1) {
            start = asc ? 1 : 9;
        } else if ('辰戌丑未'.indexOf(dayZhi) > -1) {
            start = asc ? 4 : 6;
        }
        let index = asc ? start + this._timeZhiIndex - 1 : start - this._timeZhiIndex - 1;
        if (index > 8) {
            index -= 9;
        }
        if (index < 0) {
            index += 9;
        }
        return NineStar.fromIndex(index);
    }

    getSolar(): Solar {
        return this._solar;
    }

    getJieQiTable(): Dictionary<Solar> {
        return this._jieQi;
    }

    getJieQiList(): string[] {
        return this._jieQiList;
    }

    getNextJie(): JieQi {
        const conditions = [];
        for (let i = 0, j = Lunar.JIE_QI_IN_USE.length / 2; i < j; i++) {
            conditions.push(Lunar.JIE_QI_IN_USE[i * 2]);
        }
        return this.getNearJieQi(true, conditions);
    }

    getPrevJie(): JieQi {
        const conditions = [];
        for (let i = 0, j = Lunar.JIE_QI_IN_USE.length / 2; i < j; i++) {
            conditions.push(Lunar.JIE_QI_IN_USE[i * 2]);
        }
        return this.getNearJieQi(false, conditions);
    }

    getNextQi(): JieQi {
        const conditions = [];
        for (let i = 0, j = Lunar.JIE_QI_IN_USE.length / 2; i < j; i++) {
            conditions.push(Lunar.JIE_QI_IN_USE[i * 2 + 1]);
        }
        return this.getNearJieQi(true, conditions);
    }

    getPrevQi(): JieQi {
        const conditions = [];
        for (let i = 0, j = Lunar.JIE_QI_IN_USE.length / 2; i < j; i++) {
            conditions.push(Lunar.JIE_QI_IN_USE[i * 2 + 1]);
        }
        return this.getNearJieQi(false, conditions);
    }

    getNextJieQi(): JieQi {
        return this.getNearJieQi(true);
    }

    getPrevJieQi(): JieQi {
        return this.getNearJieQi(false);
    }

    private getNearJieQi(forward: boolean, conditions?: string[]): JieQi {
        let name: string = '';
        let near: any = null;
        let filters: Dictionary<boolean> = new Dictionary<boolean>();
        let filter = false;
        if (conditions) {
            for (let i = 0, j = conditions.length; i < j; i++) {
                filters.set(conditions[i], true);
                filter = true;
            }
        }
        const today = this._solar.toYmdHms();
        this._jieQi.forEach((key, solar) => {
            const jq = this._convertJieQi(key);
            if (filter) {
                if (!filters.containsKey(jq)) {
                    return;
                }
            }
            const day = solar.toYmdHms();
            if (forward) {
                if (day < today) {
                    return;
                }
                if (null == near || day < near.toYmdHms()) {
                    name = jq;
                    near = solar;
                }
            } else {
                if (day > today) {
                    return;
                }
                if (null == near || day > near.toYmdHms()) {
                    name = jq;
                    near = solar;
                }
            }
        });
        return new JieQi(name, near);
    }

    getCurrentJieQi(): JieQi | null {
        const name = this.getJieQi();
        return name.length > 0 ? new JieQi(name, this._solar) : null;
    }

    getCurrentJie(): JieQi | null {
        const name = this.getJie();
        return name.length > 0 ? new JieQi(name, this._solar) : null;
    }

    getCurrentQi(): JieQi | null {
        const name = this.getQi();
        return name.length > 0 ? new JieQi(name, this._solar) : null;
    }

    getEightChar(): EightChar {
        return this._eightChar;
    }

    next(days: number): Lunar {
        return this._solar.next(days).getLunar();
    }

    getYearXun(): string {
        return LunarUtil.getXun(this.getYearInGanZhi());
    }

    getMonthXun(): string {
        return LunarUtil.getXun(this.getMonthInGanZhi());
    }

    getDayXun(): string {
        return LunarUtil.getXun(this.getDayInGanZhi());
    }

    getTimeXun(): string {
        return LunarUtil.getXun(this.getTimeInGanZhi());
    }

    getYearXunByLiChun(): string {
        return LunarUtil.getXun(this.getYearInGanZhiByLiChun());
    }

    getYearXunExact(): string {
        return LunarUtil.getXun(this.getYearInGanZhiExact());
    }

    getMonthXunExact(): string {
        return LunarUtil.getXun(this.getMonthInGanZhiExact());
    }

    getDayXunExact(): string {
        return LunarUtil.getXun(this.getDayInGanZhiExact());
    }

    getDayXunExact2(): string {
        return LunarUtil.getXun(this.getDayInGanZhiExact2());
    }

    getYearXunKong(): string {
        return LunarUtil.getXunKong(this.getYearInGanZhi());
    }

    getMonthXunKong(): string {
        return LunarUtil.getXunKong(this.getMonthInGanZhi());
    }

    getDayXunKong(): string {
        return LunarUtil.getXunKong(this.getDayInGanZhi());
    }

    getTimeXunKong(): string {
        return LunarUtil.getXunKong(this.getTimeInGanZhi());
    }

    getYearXunKongByLiChun(): string {
        return LunarUtil.getXunKong(this.getYearInGanZhiByLiChun());
    }

    getYearXunKongExact(): string {
        return LunarUtil.getXunKong(this.getYearInGanZhiExact());
    }

    getMonthXunKongExact(): string {
        return LunarUtil.getXunKong(this.getMonthInGanZhiExact());
    }

    getDayXunKongExact(): string {
        return LunarUtil.getXunKong(this.getDayInGanZhiExact());
    }

    getDayXunKongExact2(): string {
        return LunarUtil.getXunKong(this.getDayInGanZhiExact2());
    }

    toString(): string {
        return this.getYearInChinese() + '年' + this.getMonthInChinese() + '月' + this.getDayInChinese();
    }

    toFullString(): string {
        let s = this.toString();
        s += ' ' + this.getYearInGanZhi() + '(' + this.getYearShengXiao() + ')年';
        s += ' ' + this.getMonthInGanZhi() + '(' + this.getMonthShengXiao() + ')月';
        s += ' ' + this.getDayInGanZhi() + '(' + this.getDayShengXiao() + ')日';
        s += ' ' + this.getTimeZhi() + '(' + this.getTimeShengXiao() + ')时';
        s += ' 纳音[' + this.getYearNaYin() + ' ' + this.getMonthNaYin() + ' ' + this.getDayNaYin() + ' ' + this.getTimeNaYin() + ']';
        s += ' 星期' + this.getWeekInChinese();
        this.getFestivals().forEach(f => {
            s += ' (' + f + ')';
        });
        this.getOtherFestivals().forEach(f => {
            s += ' (' + f + ')';
        });
        const jq = this.getJieQi();
        if (jq.length > 0) {
            s += ' [' + jq + ']';
        }
        s += ' ' + this.getGong() + '方' + this.getShou();
        s += ' 星宿[' + this.getXiu() + this.getZheng() + this.getAnimal() + '](' + this.getXiuLuck() + ')';
        s += ' 彭祖百忌[' + this.getPengZuGan() + ' ' + this.getPengZuZhi() + ']';
        s += ' 喜神方位[' + this.getDayPositionXi() + '](' + this.getDayPositionXiDesc() + ')';
        s += ' 阳贵神方位[' + this.getDayPositionYangGui() + '](' + this.getDayPositionYangGuiDesc() + ')';
        s += ' 阴贵神方位[' + this.getDayPositionYinGui() + '](' + this.getDayPositionYinGuiDesc() + ')';
        s += ' 福神方位[' + this.getDayPositionFu() + '](' + this.getDayPositionFuDesc() + ')';
        s += ' 财神方位[' + this.getDayPositionCai() + '](' + this.getDayPositionCaiDesc() + ')';
        s += ' 冲[' + this.getDayChongDesc() + ']';
        s += ' 煞[' + this.getDaySha() + ']';
        return s;
    }

    getShuJiu(): ShuJiu | null {
        const currentCalendar = ExactDate.fromYmd(this._solar.getYear(), this._solar.getMonth(), this._solar.getDay());
        let start = this._jieQi.get('DONG_ZHI');
        let startCalendar = ExactDate.fromYmd(start.getYear(), start.getMonth(), start.getDay());
        if (currentCalendar < startCalendar) {
            start = this._jieQi.get('冬至');
            startCalendar = ExactDate.fromYmd(start.getYear(), start.getMonth(), start.getDay());
        }
        const endCalendar = ExactDate.fromYmd(start.getYear(), start.getMonth(), start.getDay());
        endCalendar.setDate(endCalendar.getDate() + 81);
        if (currentCalendar < startCalendar || currentCalendar >= endCalendar) {
            return null;
        }
        const days = Math.floor((currentCalendar.getTime() - startCalendar.getTime()) / Lunar.MS_PER_DAY);
        return new ShuJiu(LunarUtil.NUMBER[Math.floor(days / 9) + 1] + '九', days % 9 + 1);
    }

    getFu(): Fu | null {
        const currentCalendar = ExactDate.fromYmd(this._solar.getYear(), this._solar.getMonth(), this._solar.getDay());
        const xiaZhi = this._jieQi.get('夏至');
        const liQiu = this._jieQi.get('立秋');
        let startCalendar = ExactDate.fromYmd(xiaZhi.getYear(), xiaZhi.getMonth(), xiaZhi.getDay());

        // 第1个庚日
        let add = 6 - xiaZhi.getLunar().getDayGanIndex();
        if (add < 0) {
            add += 10;
        }
        // 第3个庚日，即初伏第1天
        add += 20;
        startCalendar.setDate(startCalendar.getDate() + add);

        // 初伏以前
        if (currentCalendar < startCalendar) {
            return null;
        }

        let days = Math.floor((currentCalendar.getTime() - startCalendar.getTime()) / Lunar.MS_PER_DAY);
        if (days < 10) {
            return new Fu('初伏', days + 1);
        }

        // 第4个庚日，中伏第1天
        startCalendar.setDate(startCalendar.getDate() + 10);

        days = Math.floor((currentCalendar.getTime() - startCalendar.getTime()) / Lunar.MS_PER_DAY);
        if (days < 10) {
            return new Fu('中伏', days + 1);
        }

        // 第5个庚日，中伏第11天或末伏第1天
        startCalendar.setDate(startCalendar.getDate() + 10);

        const liQiuCalendar = ExactDate.fromYmd(liQiu.getYear(), liQiu.getMonth(), liQiu.getDay());

        days = Math.floor((currentCalendar.getTime() - startCalendar.getTime()) / Lunar.MS_PER_DAY);
        // 末伏
        if (liQiuCalendar <= startCalendar) {
            if (days < 10) {
                return new Fu('末伏', days + 1);
            }
        } else {
            // 中伏
            if (days < 10) {
                return new Fu('中伏', days + 11);
            }
            // 末伏第1天
            startCalendar.setDate(startCalendar.getDate() + 10);
            days = Math.floor((currentCalendar.getTime() - startCalendar.getTime()) / Lunar.MS_PER_DAY);
            if (days < 10) {
                return new Fu('末伏', days + 1);
            }
        }
        return null;
    }

    getLiuYao(): string {
        return LunarUtil.LIU_YAO[(Math.abs(this._month) + this._day - 2) % 6];
    }

    getWuHou(): string {
        const jieQi = this.getPrevJieQi();
        const name = jieQi.getName();
        let offset = 0;
        for (let i = 0, j = Lunar.JIE_QI.length; i < j; i++) {
            if (name === Lunar.JIE_QI[i]) {
                offset = i;
                break;
            }
        }
        const currentCalendar = ExactDate.fromYmd(this._solar.getYear(), this._solar.getMonth(), this._solar.getDay());
        const startSolar = jieQi.getSolar();
        const startCalendar = ExactDate.fromYmd(startSolar.getYear(), startSolar.getMonth(), startSolar.getDay());
        const days = Math.floor((currentCalendar.getTime() - startCalendar.getTime()) / Lunar.MS_PER_DAY);
        return LunarUtil.WU_HOU[offset * 3 + Math.floor(days / 5)];
    }
}
