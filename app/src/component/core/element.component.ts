import {Component, Input, ViewEncapsulation} from 'angular2/core';

import {Element} from './element.objects';

import {DropdownComponent} from '../bootstrap/dropdown/dropdown.component.ts';
import {NavbarComponent} from '../bootstrap/navbar/navbar.component.ts';
import {GridComponent} from '../bootstrap/grid/grid.component.ts';
import {PagerComponent} from "../bootstrap/pager/pager.component";
import {TableComponent} from "../bootstrap/table/table.component";
@Component({
    selector: 'element',
    templateUrl: 'app/src/component/core/element.html',
    directives: [ElementComponent,DropdownComponent,NavbarComponent,GridComponent,PagerComponent,TableComponent]
})
export class ElementComponent {
    @Input() shape: Element;

}