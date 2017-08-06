import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { GamerTagService } from '../services/gamer-tag.service';
import { Gamer } from '../models/gamer.interface';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private gamerService: GamerTagService ) { }

    canActivate() {
        const gamer: Gamer  = this.gamerService.get();

        if ( gamer ) {
          this.router.navigate([`/menu/${gamer.network}/${gamer.membershipId}`]);
          return false;
        }

        return true;
    }
}