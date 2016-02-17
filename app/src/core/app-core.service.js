System.register(['angular2/core', './mock-app-core'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_app_core_1;
    var AppCoreService, MyClass;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_app_core_1_1) {
                mock_app_core_1 = mock_app_core_1_1;
            }],
        execute: function() {
            AppCoreService = (function () {
                function AppCoreService() {
                }
                AppCoreService.prototype.getCore = function () { return Promise.resolve(mock_app_core_1.CORE); };
                AppCoreService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppCoreService);
                return AppCoreService;
            }());
            exports_1("AppCoreService", AppCoreService);
            MyClass = (function () {
                function MyClass() {
                }
                return MyClass;
            }());
        }
    }
});
//# sourceMappingURL=app-core.service.js.map