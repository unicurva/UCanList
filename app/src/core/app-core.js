System.register([], function(exports_1) {
    var AppCore, AppNav;
    return {
        setters:[],
        execute: function() {
            AppCore = (function () {
                function AppCore(id, title, navigation) {
                    this.id = id;
                    this.title = title;
                    this.navigation = navigation;
                }
                return AppCore;
            })();
            exports_1("AppCore", AppCore);
            AppNav = (function () {
                function AppNav(id, name, path, component, useAsDefault, children) {
                    this.id = id;
                    this.name = name;
                    this.path = path;
                    this.component = component;
                    this.useAsDefault = useAsDefault;
                    this.children = children;
                }
                return AppNav;
            })();
            exports_1("AppNav", AppNav);
        }
    }
});
//# sourceMappingURL=app-core.js.map