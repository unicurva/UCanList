import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListViewComponent} from './src/component/core/list/list-view.component';

@Component({
    selector: 'my-app',
    template: `
    <list-view [type]="2"></list-view>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, ListViewComponent],
    providers: []
})
@RouteConfig([
    // {path: '/', redirectTo: ['Dashboard'] },
    // {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    // {path: '/heroes', name: 'Heroes', component: HeroesComponent},
    // {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
    public title = 'Tour of People';
}