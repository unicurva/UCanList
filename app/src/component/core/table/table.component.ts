import {Component, Input, forwardRef} from 'angular2/core';
import {ElementComponent} from '../element.component';
import {Element} from '../element.objects';
@Component({
    selector: 'view-table',
    templateUrl: 'app/src/component/core/table/table.html',
    directives: [(forwardRef(() => ElementComponent))]
})
export class TableComponent {
    @Input() shape: Element;
}