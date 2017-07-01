import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { RouterOutletStubComponent } from '../testing/router-outlet-stub';

describe('AppComponent', () => {
  let fixture;
  beforeEach(async(() => { // using async since component uses external template
    // Testbed sets up your testing module
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent
      ],
      imports: [
        // sets up the router to be used for testing.
        // declares router-outlet to Testbed
        // RouterTestingModule
      ]
    }).compileComponents();

    // create component to be tested
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app works!'`, () => {
    // access properties and methods of component class
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Testing Patterns');
  });

  it('should render title in a h1 tag', () => {
    // trigger angular change detection
    fixture.detectChanges();
    // access DOM component element
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('h1').textContent).toContain('Angular Testing Patterns');
  });
});
