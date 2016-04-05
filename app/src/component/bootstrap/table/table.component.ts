import {Component, Input} from 'angular2/core';
import {Element} from '../../core/element.objects';
import {PagerComponent} from "../pager/pager.component";
@Component({
    selector: 'bs-table',
    templateUrl: 'app/src/component/bootstrap/table/table.html',
    directives: [PagerComponent]
})
export class TableComponent {
    @Input() shape: Element;
}