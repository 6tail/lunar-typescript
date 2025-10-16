import {Solar} from './Solar';
import {LunarUtil} from './LunarUtil';

export class JieQi {
    private _name: string;
    private _solar: Solar;
    private readonly _jie: boolean;
    private readonly _qi: boolean;

    constructor(name: string, solar: Solar) {
        let jie = false, qi = false;
        for (let i = 0, j = LunarUtil.JIE_QI.length; i < j; i++) {
            if(LunarUtil.JIE_QI[i]===name){
                if(i%2==0){
                    qi = true;
                }else{
                    jie = true;
                }
                break;
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
