import {Solar} from './Solar';
import {Lunar} from './Lunar';

export class JieQi {
    private _name: string;
    private _solar: Solar;
    private _jie: boolean;
    private _qi: boolean;

    constructor(name: string, solar: Solar) {
        let jie = false, qi = false, i, j;
        for (i = 0, j = Lunar.JIE_QI.length; i < j; i++) {
            if(Lunar.JIE_QI[i]===name){
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
