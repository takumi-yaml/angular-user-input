import {Component} from '@angular/core';

@Component({
    selector: 'app-keyup',
    templateUrl: './keyup.component.html',
    styleUrls: ['./keyup.component.css']
})
export class KeyupComponent {
    values = '';

    constructor() {
    }

    update(value: string) {
        this.values = value;
    }

}
