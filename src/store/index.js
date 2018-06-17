import { observable, computed, action } from 'mobx'
import data from '../assets/data.json';
class RootStore{
    @observable
    data = {};

    @computed get sum(){
        return this.data.sum;
    }

    constructor(inData){
        this.data = inData;
    }

    @action
    add() {
        const { sum } = this.data;
        this.data.sum = sum + 1;
    }

    @action
    reduce() {
        const { sum } = this.data;
        this.data.sum = sum - 1;
    }
}


export default new RootStore(data);