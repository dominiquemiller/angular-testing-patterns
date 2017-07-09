import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Person } from '../models/person.interface';
import { API_URL } from '../environments/environment';

@Injectable()
export class AsyncService {

    constructor(private http: Http) { }

    getStuff() {

    return this.http.get(`${API_URL}/some_endpoint`)
                    .map( (response: Response) => response.json() )
                    .catch( (error: any) => Observable.throw(error) );
    }

    postStuff(user: Person) {
        const url = `${API_URL}/another_endpoint`;
        const body = { some_param: user };
        return this.http
                   .post(url, body)
                   .map( (response: Response) => response.json() )
                   .catch( (error: any) => Observable.throw(error) );
    }

}
