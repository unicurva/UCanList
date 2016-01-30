import {Injectable} from 'angular2/core';
import {APPDATA} from './mock-app-data';

@Injectable()
export class AppService {
    getHeroes() {
        return Promise.resolve(APPDATA);
    }

    getHero(id: number) {
        return Promise.resolve(APPDATA)
            .then(heroes => heroes.filter(h => h.id === id)[0]);
    }
}