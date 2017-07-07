import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AsyncService } from '../../services/async.service';

import { Person } from '../../models/person.interface';

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {
    users;

    constructor( private route: ActivatedRoute,
                 private asyncService: AsyncService) { }

    ngOnInit() {
        this.route.data.subscribe( data => {
            this.users = data;
        });
     }

     addUser(user: Person) {
        this.asyncService.postStuff(user).subscribe( data => {
            if (typeof(data.id) === 'number') {
                this.users.push(user);
            }
        })
     }
}