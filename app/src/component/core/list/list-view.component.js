System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ListViewComponent, ListType;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ListViewComponent = (function () {
                function ListViewComponent() {
                    this.type = ListType.UNORDERED;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ListViewComponent.prototype, "type", void 0);
                ListViewComponent = __decorate([
                    core_1.Component({
                        selector: 'list-view',
                        templateUrl: 'app/src/component/core/list/list-view.html',
                        directives: [ListViewComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListViewComponent);
                return ListViewComponent;
            })();
            exports_1("ListViewComponent", ListViewComponent);
            (function (ListType) {
                ListType[ListType["ORDERED"] = 0] = "ORDERED";
                ListType[ListType["UNORDERED"] = 1] = "UNORDERED";
                ListType[ListType["DESCRIPTION"] = 2] = "DESCRIPTION";
            })(ListType || (ListType = {}));
            exports_1("ListType", ListType);
        }
    }
});
//# sourceMappingURL=list-view.component.js.map