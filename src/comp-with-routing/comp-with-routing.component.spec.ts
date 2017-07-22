import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CompWithRoutingComponent } from './comp-with-routing.component';
import { RouterOutletStubComponent } from '../testing/router-outlet-stub';

// mock router and spy on method
const router = {
  navigateByUrl: jasmine.createSpy('navigateByUrl')
}

describe('CompWithRoutingComponent', () => {
  let fixture;
  let app;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: router},
      ],
      declarations: [
        CompWithRoutingComponent,
        RouterOutletStubComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CompWithRoutingComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should navigate to menu if gamer info stored', () => {
     app.routeMe = true;
     fixture.detectChanges();
     expect(router.navigateByUrl).toHaveBeenCalledWith('users');
  });

  it('should navigate to sign-in if no gamer info found', () => {
     app.routeMe = false;
     fixture.detectChanges();
     expect(router.navigateByUrl).toHaveBeenCalledWith('people');
  });
  
});