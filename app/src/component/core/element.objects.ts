export class Element implements Serializable<Element> {
    id: string;
    text: string;
    type: string;
    subtype: string;
    class: Object;
    expanded:boolean;
    selected:boolean;
    items: Array<Object>;
    icon: string;

    deserialize(input):Element {
        console.log("INPUT ELEMENT: " + input);
        this.id = input.id;
        this.text = input.text;
        this.type = input.type;
        this.subtype = input.subtype;
        this.class = input.class;
        this.expanded = input.expanded;
        this.selected = input.selected;
        this.icon = input.icon;
        this.items = [];
        for(var i = 0; i < input.items.length; i++) {
            this.items.push(input.items[i]);
        }
        return this;
    }
    toggle() { this.expanded = !this.expanded; }
    toggleSelected() { this.selected = !this.selected; }
}

interface Serializable<T> {
    deserialize(input: Object): T;
}