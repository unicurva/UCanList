import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {AppCore,AppNav} from './src/core/app-core';
import {AppCoreService} from './src/core/app-core.service';
import {NavigationService} from './src/nav/nav.service';

@Component({
    selector: 'sticky-header',
    templateUrl: 'app/sticky-header.component.html',
    styleUrls: ['app/sticky-header.component.css'],
    providers: [AppCoreService,NavigationService]
})
export class StickyHeaderComponent implements OnInit {

    public core: AppCore;
    public nav: AppNav[] = [];
    public selectedNav: AppNav;
    public defaultNav: AppNav;

    public coreObj: Object;
    public navObj: Object;

    constructor(private _appCoreService: AppCoreService, private _navService: NavigationService, private _router: Router) { }

    getCore() {
        this._appCoreService.getCore().then(core => this.core = core);
    }

    getNavObject() {
        this._navService.getNavigation().subscribe(
            data => {
                this.coreObj = data[0]
                this.navObj = data[1]
                console.log("data: " + data[0].title);
            }

        );
    }

    ngOnInit() {
        this.getCore();
        this.getNavObject();
    }

    onSelect(nav: AppNav) {
        this.selectedNav = nav;
        console.log(this.selectedNav.name);
    }

    isNavSelected(nav: AppNav) {
        if(this.selectedNav === undefined) { if(nav.useAsDefault) { this.defaultNav = nav; return true; } return false; }
        return nav === this.selectedNav;
    }
}