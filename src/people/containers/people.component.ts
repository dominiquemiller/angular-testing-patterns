import { Component, OnInit } from '@angular/core';
import { SyncService } from '../../services/sync.service';

@Component({
    selector: 'app-people',
    template: `
        <ul>
          <li *ngFor="let person of people" fancyBox>
              Name: {{ person }}
              <button (click)="remove(person)">Remove</button>
          </li>
        </ul>

        <input name="newName" type="text" [(ngModel)]="newName" placeholder="new name">
        <button (click)="add(newName)">Add</button>
    `
})

export class PeopleComponent implements OnInit {
    people: Array<String>;
    newName: String;

    constructor( private peopleService: SyncService) { }

    ngOnInit() {
        this.people = this.peopleService.list();
    }

    remove(person) {
        this.people = this.peopleService.removeItem(person);
    }

    add(person) {
        this.people = this.peopleService.addItem(person);
    }
}