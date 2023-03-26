export class TaoFestival {
    private readonly _name: string;
    private readonly _remark: string;

    constructor(name: string, remark: string = '') {
        this._name = name;
        this._remark = remark;
    }

    getName(): string {
        return this._name;
    }

    getRemark(): string {
        return this._remark;
    }

    toString(): string {
        return this._name;
    }

    toFullString(): string {
        const l = [this._name];
        if (this._remark) {
            l.push('['+this._remark+']');
        }
        return l.join('');
    }
}
