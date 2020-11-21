import {Solar} from './Solar';
import {LunarUtil} from './LunarUtil';

export class JieQi {
    private _name: string;
    private _solar: Solar;
    private _jie: boolean;
    private _qi: boolean;

    constructor(name: string, solar: Solar) {
        let jie = false, qi = false, i, j;
        for (i = 0, j = LunarUtil.JIE.length; i < j; i++) {
            if (LunarUtil.JIE[i] === name) {
                jie = true;
                break;
            }
        }
        if (!jie) {
            for (i = 0, j = LunarUtil.QI.length; i < j; i++) {
                if (LunarUtil.QI[i] === name) {
                    qi = true;
                    break;
                }
            }
        }
        this._name = name;
        this._solar = solar;
        this._jie = jie;
        this._qi = qi;
    }

    getName(): string {
        return this._name;
    }

    getSolar(): Solar {
        return this._solar;
    }

    setName(name: string) {
        this._name = name;
    }

    setSolar(solar: Solar) {
        this._solar = solar;
    }

    isJie(): boolean {
        return this._jie;
    }

    isQi(): boolean {
        return this._qi;
    }

    toString(): string {
        return this.getName();
    }
}
