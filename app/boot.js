System.register(['angular2/platform/browser', 'angular2/http', 'angular2/router', './app.service.ts', './src/nav/nav.service', './app.component', 'rxjs/add/operator/map'], function(exports_1) {
    var browser_1, http_1, router_1, app_service_ts_1, nav_service_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_service_ts_1_1) {
                app_service_ts_1 = app_service_ts_1_1;
            },
            function (nav_service_1_1) {
                nav_service_1 = nav_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                app_service_ts_1.AppService,
                nav_service_1.NavigationService
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map