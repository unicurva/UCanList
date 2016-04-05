import {Component, Input} from 'angular2/core';
import {Element,AbstractElement} from '../../core/element.objects';
import {toArray} from "rxjs/operator/toArray";
@Component({
    selector: 'bs-dropdown',
    templateUrl: 'app/src/component/bootstrap/dropdown/dropdown.html',
    directives: []
})
export class DropdownComponent extends AbstractElement { }