import {bootstrap} from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppService} from './app.service.ts';
import {NavigationService} from './src/nav/nav.service';
import {AppComponent} from './app.component';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    AppService,
    NavigationService
]);