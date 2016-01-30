export class Item {
    name: string;
    children: Array<Item>;
    expanded:boolean = false;
    checked:boolean = false;
    constructor(name, children) {
        this.name = name;
        this.children = children;
    }
    toggle() { this.expanded = !this.expanded; }
    check() {
        let newState = !this.checked;
        this.checked = newState;
        this.checkRecursive(newState);
    }
    checkRecursive(state){
        this.children.forEach(d => {
            d.checked = state;
            d.checkRecursive(state);
        })
    }
}