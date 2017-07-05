import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from '../../models/person.interface';

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {
    users: Person[];

    constructor( private route: ActivatedRoute,
                 private router: Router) { }

    ngOnInit() {
        this.route.data.subscribe( data => {
            this.users = data.users;
        });
     }
}