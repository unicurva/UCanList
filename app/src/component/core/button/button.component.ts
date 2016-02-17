import {Component, Input, forwardRef} from 'angular2/core';
import {ElementComponent} from '../element.component';
import {Element} from '../element.objects';
@Component({
    selector: 'view-button',
    templateUrl: 'app/src/component/core/button/button.html',
    directives: [(forwardRef(() => ElementComponent))]
})
export class ButtonComponent {
    @Input() shape: Element;
}