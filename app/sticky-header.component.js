System.register(['angular2/core', 'angular2/router', './src/core/app-core.service', './src/nav/nav.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_core_service_1, nav_service_1;
    var StickyHeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_core_service_1_1) {
                app_core_service_1 = app_core_service_1_1;
            },
            function (nav_service_1_1) {
                nav_service_1 = nav_service_1_1;
            }],
        execute: function() {
            StickyHeaderComponent = (function () {
                function StickyHeaderComponent(_appCoreService, _navService, _router) {
                    this._appCoreService = _appCoreService;
                    this._navService = _navService;
                    this._router = _router;
                    this.nav = [];
                }
                StickyHeaderComponent.prototype.getCore = function () {
                    var _this = this;
                    this._appCoreService.getCore().then(function (core) { return _this.core = core; });
                };
                StickyHeaderComponent.prototype.getNavObject = function () {
                    var _this = this;
                    this._navService.getNavigation().subscribe(function (data) {
                        _this.coreObj = data[0];
                        _this.navObj = data[1];
                        console.log("data: " + data[0].title);
                    });
                };
                StickyHeaderComponent.prototype.ngOnInit = function () {
                    this.getCore();
                    this.getNavObject();
                };
                StickyHeaderComponent.prototype.onSelect = function (nav) {
                    this.selectedNav = nav;
                    console.log(this.selectedNav.name);
                };
                StickyHeaderComponent.prototype.isNavSelected = function (nav) {
                    if (this.selectedNav === undefined) {
                        if (nav.useAsDefault) {
                            this.defaultNav = nav;
                            return true;
                        }
                        return false;
                    }
                    return nav === this.selectedNav;
                };
                StickyHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'sticky-header',
                        templateUrl: 'app/sticky-header.component.html',
                        styleUrls: ['app/sticky-header.component.css'],
                        providers: [app_core_service_1.AppCoreService, nav_service_1.NavigationService]
                    }), 
                    __metadata('design:paramtypes', [app_core_service_1.AppCoreService, nav_service_1.NavigationService, router_1.Router])
                ], StickyHeaderComponent);
                return StickyHeaderComponent;
            })();
            exports_1("StickyHeaderComponent", StickyHeaderComponent);
        }
    }
});
//# sourceMappingURL=sticky-header.component.js.map