import { Injectable } from '@angular/core';
import { Gamer } from '../models/gamer.interface';

@Injectable()
export class GamerTagService {

    constructor() { }

    set(gamer: Gamer) {
      const userInfo = JSON.stringify(gamer);
      localStorage.setItem('gamer', userInfo);
    }

    delete() {
      localStorage.removeItem('gamer');
    }

    get() {
      const gamer = localStorage.getItem('gamer');
      return JSON.parse(gamer);
    }
}