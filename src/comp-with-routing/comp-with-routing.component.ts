import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-with-routing',
  template: '<router-outlet></router-outlet>',
})
export class CompWithRoutingComponent implements OnInit {
  routeMe: boolean;

  constructor( private router: Router ) {};

  ngOnInit() {
     if ( this.routeMe ) {
          this.router.navigateByUrl('users');
     } else {
          this.router.navigateByUrl('people');
     }
  }

}
