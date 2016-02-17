System.register([], function(exports_1) {
    "use strict";
    var Item;
    return {
        setters:[],
        execute: function() {
            Item = (function () {
                function Item(name, children) {
                    this.expanded = false;
                    this.checked = false;
                    this.name = name;
                    this.children = children;
                }
                Item.prototype.toggle = function () { this.expanded = !this.expanded; };
                Item.prototype.check = function () {
                    var newState = !this.checked;
                    this.checked = newState;
                    this.checkRecursive(newState);
                };
                Item.prototype.checkRecursive = function (state) {
                    this.children.forEach(function (d) {
                        d.checked = state;
                        d.checkRecursive(state);
                    });
                };
                return Item;
            }());
            exports_1("Item", Item);
        }
    }
});
//# sourceMappingURL=data.object.js.map