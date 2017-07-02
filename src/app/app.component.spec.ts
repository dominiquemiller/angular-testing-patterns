import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterOutletStubComponent } from '../testing/router-outlet-stub';

// App Component spec with external template.
// Template with a router outlet.

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let el: DebugElement;

  beforeEach(async(() => { // using async since component uses external template
    // Testbed sets up your testing module
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent
      ],
      imports: []
    }).compileComponents();
  }));

  beforeEach( () => {
    // create component to be tested, and closes TestBed to any 
    // further config or overrides
    fixture = TestBed.createComponent(AppComponent);
    // access properties and methods of component class
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'app works!'`, () => {
    expect(component.title).toEqual('Angular Testing Patterns');
  });

  it('should render title in a h1 tag', () => {
    // trigger angular change detection
    fixture.detectChanges();
    // access DOM component element
    const compiled = el.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Testing Patterns');
  });
});
