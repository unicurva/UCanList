System.register(['angular2/core', './mock-app-data'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_app_data_1;
    var AppService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_app_data_1_1) {
                mock_app_data_1 = mock_app_data_1_1;
            }],
        execute: function() {
            AppService = (function () {
                function AppService() {
                }
                AppService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_app_data_1.APPDATA);
                };
                AppService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_app_data_1.APPDATA)
                        .then(function (heroes) { return heroes.filter(function (h) { return h.id === id; })[0]; });
                };
                AppService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppService);
                return AppService;
            })();
            exports_1("AppService", AppService);
        }
    }
});
//# sourceMappingURL=app.service.js.map