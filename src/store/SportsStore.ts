import { observable, action, computed } from 'mobx';
import { SportsData } from '../interface';

class SportsStore {
    @observable sports: SportsData[] = [];
    @observable chosenSport: SportsData | null = null;

    constructor(sports: SportsData[]) {
        this.sports = sports;
    }

    @action
    chooseSport(sport: SportsData) {
        this.chosenSport = sport;
    }

    @computed
    get sortedSports() {
        return this.sports.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
}

export default SportsStore;

