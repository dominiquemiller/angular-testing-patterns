import { Injectable } from '@angular/core';

@Injectable()
export class SyncService {
    listOfStuff: Array<String> = [];

    constructor() { }

    list() {
        return this.listOfStuff;
    }

    addItem(item: String): Array<String> {
        this.listOfStuff.push(item);
        return this.listOfStuff;
    }

    removeItem(item: String): Array<String> {
        this.listOfStuff = this.listOfStuff.filter( (value: String) => value !== item );
        return this.listOfStuff;
    }

    addGroup(group: Array<String>): Array<String> {
        const newList =  [...this.listOfStuff, ...group];
        this.listOfStuff = newList;
        return this.listOfStuff;
    }

}
