export class FotoFestival {
    private _name: string;
    private _result: string;
    private _everyMonth: boolean;
    private _remark: string;

    constructor(name: string, result: string = '', everyMonth: boolean = false, remark: string = '') {
        this._name = name;
        this._result = result ? result : '';
        this._everyMonth = everyMonth;
        this._remark = remark;
    }

    getName(): string {
        return this._name;
    }

    getResult(): string {
        return this._result;
    }

    isEveryMonth(): boolean {
        return this._everyMonth;
    }

    getRemark(): string {
        return this._remark;
    }

    toString(): string {
        return this._name;
    }

    toFullString(): string {
        const l = [this._name];
        if (this._result) {
            l.push(this._result);
        }
        if (this._remark) {
            l.push(this._remark);
        }
        return l.join(' ');
    }
}
