import {Component, Input} from 'angular2/core';
import {Element} from '../../core/element.objects';
@Component({
    selector: 'bs-grid',
    templateUrl: 'app/src/component/bootstrap/grid/grid.html',
    directives: []
})
export class GridComponent {
    @Input() shape: Element;
}