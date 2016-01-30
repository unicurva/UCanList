import {Component, Input} from 'angular2/core';
import {Item} from '../data.object';
@Component({
    selector: 'list-view',
    templateUrl: 'app/src/component/core/list/list-view.html',
    directives: [ListViewComponent]
})
export class ListViewComponent {
    @Input() type: ListType = ListType.UNORDERED;
    //@Input() items: Array<Item>;
}

export enum ListType {
    ORDERED,
    UNORDERED,
    DESCRIPTION
}