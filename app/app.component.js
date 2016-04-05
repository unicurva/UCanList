System.register(['angular2/core', 'angular2/router', './src/component/core/element.component', './src/nav/nav.service', './src/component/core/element.objects'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, element_component_1, nav_service_1, element_objects_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (element_component_1_1) {
                element_component_1 = element_component_1_1;
            },
            function (nav_service_1_1) {
                nav_service_1 = nav_service_1_1;
            },
            function (element_objects_1_1) {
                element_objects_1 = element_objects_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_navService) {
                    this._navService = _navService;
                    this.listType = "ol";
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getNavObject();
                };
                AppComponent.prototype.getNavObject = function () {
                    var _this = this;
                    this._navService.getNavigation().subscribe(function (data) {
                        _this.coreObj = data[0];
                        _this.navObj = data[1];
                        console.log("data: " + data[0].text);
                        _this.root = new element_objects_1.Element().deserialize(_this.coreObj);
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <element *ngIf=\"root\" [shape]=\"root\"></element>\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, element_component_1.ElementComponent],
                        providers: [nav_service_1.NavigationService]
                    }),
                    router_1.RouteConfig([]), 
                    __metadata('design:paramtypes', [nav_service_1.NavigationService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map