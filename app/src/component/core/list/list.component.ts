import {Component, Input, forwardRef} from 'angular2/core';
import {ElementComponent} from '../element.component';
import {Element} from '../element.objects';
@Component({
    selector: 'view-list',
    templateUrl: 'app/src/component/core/list/list.html',
    directives: [(forwardRef(() => ElementComponent))]
})
export class ListComponent {
    @Input() shape: Element;
}