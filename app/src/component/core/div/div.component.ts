import {Component, Input, forwardRef} from 'angular2/core';
import {ElementComponent} from '../element.component';
import {Element} from '../element.objects';
@Component({
    selector: 'view-div',
    templateUrl: 'app/src/component/core/div/div.html',
    directives: [(forwardRef(() => ElementComponent))]
})
export class DivComponent {
    @Input() shape: Element;
}