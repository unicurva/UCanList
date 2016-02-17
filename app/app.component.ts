import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ElementComponent} from './src/component/core/element.component';
import {NavigationService} from './src/nav/nav.service';
import {Element} from './src/component/core/element.objects';

@Component({
    selector: 'my-app',
    template: `
    <element *ngIf="root" [shape]="root"></element>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, ElementComponent],
    providers: [NavigationService]
})
@RouteConfig([
    // {path: '/', redirectTo: ['Dashboard'] },
    // {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    // {path: '/heroes', name: 'Heroes', component: HeroesComponent},
    // {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent implements OnInit {

    public coreObj: Object;
    public navObj: Object;

    public root: Element;

    public listType: string = "ol";

    constructor(private _navService: NavigationService) { }

    ngOnInit() {
        this.getNavObject();
    }

    getNavObject() {
        this._navService.getNavigation().subscribe(
            data => {
                this.coreObj = data[0]
                this.navObj = data[1]
                console.log("data: " + data[0].text);
                this.root = new Element().deserialize(this.coreObj);
            }
        );

    }

}