import { observable, computed, action } from 'mobx'
import data from '../assets/data.json';
class RootStore {
    @observable
    data = {
        sum: 0,
        githubData: {}
    };

    constructor(inData) {
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

    @action
    reset() {
        this.data.sum = 1;
    }

    @action
    fetchData() {
        fetch('https://api.github.com/users/afeiship')
            .then(resp => resp.json())
            .then(resp => {
                this.data.githubData = resp;
            });
    }
}


export default new RootStore(data);