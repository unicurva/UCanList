import {Input} from 'angular2/core';

export class Element implements Serializable<Element> {
    id: string;
    text: string;
    type: string;
    subtype: string;
    class: Object;
    expanded:boolean;
    selected:boolean;
    items: Array<Object>;
    icons: Object;

    deserialize(input):Element {
        console.log("INPUT ELEMENT: " + input);
        this.id = input.id;
        this.text = input.text;
        this.type = input.type;
        this.subtype = input.subtype;
        this.class = input.class;
        this.expanded = input.expanded;
        this.selected = input.selected;
        this.icons = input.icons;
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

export abstract class AbstractElement {
    @Input() set shape(shape:Element) { this.shape = shape; }
    constructor() {
        if(this.shape == null) { this.shape = new Element(); }
    }
    @Input() set id(id:string) { this.shape.id = id; }
    @Input() set text(text:string) { this.shape.text = text; }
    @Input() set type(type:string) { this.shape.type = type; }
    @Input() set subtype(subtype:string) { this.shape.subtype = subtype; }
    @Input() set styleClass(styleClass:string) { this.shape.class = JSON.parse(styleClass); }
    @Input() set expanded(expanded:boolean) { this.shape.expanded = expanded; }
    @Input() set selected(selected:boolean) { this.shape.selected = selected; }
    @Input() set icons(icons:string) {
        this.shape.icons = (typeof icons === 'string') ? { icons } : JSON.parse(icons);
    }
    @Input() set items(items:string) {
        this.shape.items = JSON.parse(items);
    }
}