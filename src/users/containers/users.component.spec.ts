import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersComponent } from './users.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { AsyncService } from '../../services/async.service';
import { Person } from '../../models/person.interface';

import { NewUserFormComponent } from '../../testing/new-user-form-stub';

import { fakeData } from '../../testing/fake-data-stub';

// User Component Spec with external template,
// reolved data and child component

class AsyncServiceStub {
    get_stuff() {}

    post_stuff(user: Person) {}
};

describe('UsersComponent', () => {
  let userResolverStub = {
    data: Observable.of(fakeData)
  };
  let fixture: ComponentFixture<UsersComponent>;
  let component: UsersComponent;
  let el: DebugElement;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [
        UsersComponent,
        NewUserFormComponent
      ],
      providers: [
          // Override with our stubs
          { provide: ActivatedRoute, useValue: userResolverStub },
          { provide: AsyncService, useValue: AsyncServiceStub }
      ],
      imports: []
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);

    component = fixture.componentInstance;
    el = fixture.debugElement;
  }));

  it('should be defined', async(() => {
    expect(component instanceof UsersComponent).toBe(true);
  }));

  it('should have users via resolver', async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
          expect(component.users.length).toBe(3);
      });
  }));

});

