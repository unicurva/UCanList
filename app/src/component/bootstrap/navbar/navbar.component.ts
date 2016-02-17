import {Component, Input} from 'angular2/core';
import {Element} from '../../core/element.objects';
@Component({
    selector: 'bs-navbar',
    templateUrl: 'app/src/component/bootstrap/navbar/navbar.html',
    directives: []
})
export class NavbarComponent {
    @Input() shape: Element;
}