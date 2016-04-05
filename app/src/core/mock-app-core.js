System.register(['./app-core'], function(exports_1) {
    var app_core_1;
    var NAVIGATION, CORE;
    return {
        setters:[
            function (app_core_1_1) {
                app_core_1 = app_core_1_1;
            }],
        execute: function() {
            NAVIGATION = [
                new app_core_1.AppNav(1, "Home", "", "", true, null),
                new app_core_1.AppNav(2, "Page 1", "", "", false, null),
                new app_core_1.AppNav(3, "Page 2", "", "", false, null),
                new app_core_1.AppNav(4, "Page 3", "", "", false, null),
                new app_core_1.AppNav(5, "Page 4", "", "", false, null)
            ];
            exports_1("CORE", CORE = new app_core_1.AppCore(1, "Mayuri Bolla", NAVIGATION));
        }
    }
});
//# sourceMappingURL=mock-app-core.js.map