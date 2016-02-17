import {Component, Input, forwardRef} from 'angular2/core';
import {ElementComponent} from '../element.component';
import {Element} from '../element.objects';
@Component({
    selector: 'view-item',
    templateUrl: 'app/src/component/core/item/item.html',
    directives: [(forwardRef(() => ElementComponent))]
})
export class ItemComponent {
    @Input() shape: Element;
}