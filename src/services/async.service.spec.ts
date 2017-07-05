import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, ResponseType, Response, ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { AsyncService } from './async.service';
import { Person } from '../models/person.interface';

const fakeData: Person[] = [ 
    { name: 'Ted', age: 22, id: 1 },
    { name: 'Sally', age: 32, id: 34 },
    { name: 'Earl', age: 41, id: 88 },
];

const fakePerson: Person = { name: 'Ted', age: 22, id: 1 };

describe('AsyncService', () => {

  let mockbackend: MockBackend;
  let service: AsyncService;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        AsyncService,
        // override token with testing utility
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));

  // utility function to get one or more services from the test root injector.
  // second beforeEach is not async
  beforeEach(inject([AsyncService, XHRBackend], (_service, _mockbackend) => {
    service = _service;
    mockbackend = _mockbackend;
  }));

  it('can instantiate service', () => expect(service instanceof AsyncService).toBe(true) );

  it('should get some stuff', () => {
      // setup mock server response
      mockbackend.connections.subscribe( connection => {
        connection.mockRespond( new Response(new ResponseOptions( { status: 200, body: JSON.stringify(fakeData) } )));
      });
      service.getStuff().subscribe( data => expect(data).toEqual(fakeData) );
  });

  it('should create a some stuff', () => {
      // setup mock server response
      mockbackend.connections.subscribe( connection => {
        connection.mockRespond( new Response(new ResponseOptions( { status: 200, body: JSON.stringify({ id: 1 }) } )));
      });

      service.postStuff(fakePerson).subscribe( data => expect(data.id).toEqual(fakePerson.id) );
  });

  it('should throw an error', () => {
      // setup mock server error repsonse
      mockbackend.connections.subscribe( connection => {
        connection.mockError( new Response(new ResponseOptions( { status: 404 } )));
      });

      service.getStuff().subscribe( (data) => data, (error) => expect(error.status).toEqual(404) );

  });

});
