import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'new-user-form',
    template: ``
})

export class NewUserFormComponent {
    @Output()
    submitUser: EventEmitter<any> = new EventEmitter<any>();
}