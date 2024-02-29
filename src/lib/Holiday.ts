export class Holiday {

    private _day: string;
    private _name: string;
    private _work: boolean;
    private _target: string;

    constructor(day: string, name: string, work: boolean, target: string) {
        this._day = Holiday._ymd(day);
        this._name = name;
        this._work = work;
        this._target = Holiday._ymd(target);
    }

    private static _ymd(s: string): string {
        return s.indexOf('-') < 0 ? (s.substring(0, 4) + '-' + s.substring(4, 6) + '-' + s.substring(6)) : s;
    }

    getDay(): string {
        return this._day;
    }

    setDay(value: string) {
        this._day = Holiday._ymd(value);
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    isWork(): boolean {
        return this._work;
    }

    setWork(value: boolean) {
        this._work = value;
    }

    getTarget(): string {
        return this._target;
    }

    setTarget(value: string) {
        this._target = Holiday._ymd(value);
    }

    toString(): string {
        return this._day + ' ' + this._name + (this._work ? '调休' : '') + ' ' + this._target;
    }
}
