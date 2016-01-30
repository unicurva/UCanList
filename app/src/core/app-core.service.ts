import {Injectable} from 'angular2/core';
import {CORE} from './mock-app-core';

@Injectable()
export class AppCoreService {
    getCore() { return Promise.resolve(CORE); }
}

abstract class MyClass {

}