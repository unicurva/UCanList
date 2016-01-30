import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class NavigationService {
    constructor(private http:Http) { }
    getNavigation() {
        return Observable.forkJoin(
            this.http.get('mock/core/core.json').map((res:Response) => res.json()),
            this.http.get('mock/navbar/navbar.json').map((res:Response) => res.json())
        );
    }
}