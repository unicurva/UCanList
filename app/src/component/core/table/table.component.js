System.register(['angular2/core', '../element.component', '../element.objects'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, element_component_1, element_objects_1;
    var TableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (element_component_1_1) {
                element_component_1 = element_component_1_1;
            },
            function (element_objects_1_1) {
                element_objects_1 = element_objects_1_1;
            }],
        execute: function() {
            TableComponent = (function () {
                function TableComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', element_objects_1.Element)
                ], TableComponent.prototype, "shape", void 0);
                TableComponent = __decorate([
                    core_1.Component({
                        selector: 'view-table',
                        templateUrl: 'app/src/component/core/table/table.html',
                        directives: [(core_1.forwardRef(function () { return element_component_1.ElementComponent; }))]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TableComponent);
                return TableComponent;
            })();
            exports_1("TableComponent", TableComponent);
        }
    }
});
//# sourceMappingURL=table.component.js.map