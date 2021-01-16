export class Fu {
    private _name: string;
    private _index: number;

    constructor(name: string, index: number) {
        this._name = name;
        this._index = index;
    }

    getName(): string {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }

    getIndex(): number {
        return this._index;
    }

    setIndex(index: number) {
        this._index = index;
    }

    toString(): string {
        return this.getName();
    }

    toFullString(): string {
        return this.getName() + '第' + this.getIndex() + '天';
    }
}
