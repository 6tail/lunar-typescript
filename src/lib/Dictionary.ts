export class Dictionary<V> {
    protected table: { [key: string]: V };

    clear() {
        this.table = {};
    }

    get(key: string): V {
        return this.table[key];
    }

    remove(key: string): V {
        const v = this.table[key];
        delete this.table[key];
        return v;
    }

    set(key: string, value: V) {
        this.table[key] = value;
    }

    constructor(entries?: [string, V][]) {
        this.table = {};
        if (entries) {
            entries.forEach(f => {
                this.set(f[0], f[1]);
            });
        }
    }

    size(): number {
        let n = 0;
        for (const key in this.table) {
            if (this.table.hasOwnProperty(key)) {
                n++;
            }
        }
        return n;
    }

    isEmpty(): boolean {
        return this.size() < 1;
    }

    forEach(callback: (key: string, value: V) => any): void {
        for (const name in this.table) {
            if (this.table.hasOwnProperty(name)) {
                const ret = callback(name, this.table[name]);
                if (ret === false) {
                    return;
                }
            }
        }
    }

    containsKey(key: string): boolean {
        return this.table.hasOwnProperty(key);
    }

    keys(): string[] {
        const l: string[] = [];
        for (const key in this.table) {
            if (this.table.hasOwnProperty(key)) {
                l.push(key);
            }
        }
        return l;
    }

    values(): V[] {
        const l: V[] = [];
        for (const key in this.table) {
            if (this.table.hasOwnProperty(key)) {
                l.push(this.table[key]);
            }
        }
        return l;
    }
}
