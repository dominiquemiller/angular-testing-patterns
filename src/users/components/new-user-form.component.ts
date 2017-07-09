import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'new-user-form',
    template: `<button (click)="login('dummyData')"></button>`
})

export class NewUserFormComponent implements OnInit {
    @Output()
    submitUser: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {}

    login(value) {
        this.submitUser.emit(value);
    }
}