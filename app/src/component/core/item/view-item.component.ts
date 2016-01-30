import {Component, Input} from 'angular2/core';
import {Item} from '../data.object';
@Component({
    selector: 'view-item',
    templateUrl: 'app/src/component/core/list/view-item.html',
    directives: [ViewItem]
})
export class ViewItem {
    @Input() children: Array<Item>;
}