import {Component, Input} from 'angular2/core';
import {Element} from '../../core/element.objects';
@Component({
    selector: 'bs-pager',
    templateUrl: 'app/src/component/bootstrap/pager/pager.html',
    directives: []
})
export class PagerComponent {
    @Input() shape: Element;
}