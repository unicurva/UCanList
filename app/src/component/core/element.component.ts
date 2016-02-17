import {Component, Input, ViewEncapsulation} from 'angular2/core';

import {DropdownComponent} from '../bootstrap/dropdown/dropdown.component.ts';
import {NavbarComponent} from '../bootstrap/navbar/navbar.component.ts';

import {Element} from './element.objects';
@Component({
    selector: 'element',
    templateUrl: 'app/src/component/core/element.html',
    directives: [ElementComponent,DropdownComponent,NavbarComponent]
})
export class ElementComponent {
    @Input() shape: Element;
}