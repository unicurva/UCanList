import {Component, Input} from 'angular2/core';
import {Element} from '../../core/element.objects';
@Component({
    selector: 'bs-dropdown',
    templateUrl: 'app/src/component/bootstrap/dropdown/dropdown.html',
    directives: []
})
export class DropdownComponent {
    @Input() shape: Element;
}