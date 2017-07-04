import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { PeopleComponent } from './people.component';
import {  SyncService } from '../../services/sync.service';

// Component with service dependency spec

describe('PeopleComponent', () => {
  let fixture: ComponentFixture<PeopleComponent>;
  let component: PeopleComponent;
  let el: DebugElement;
  let Service: SyncService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        PeopleComponent
      ],
      providers: [
         SyncService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleComponent);

    component = fixture.componentInstance;
    el = fixture.debugElement;

    // Get instance of service and spy on methods
    Service = fixture.debugElement.injector.get(SyncService);
    spyOn(Service, 'addItem').and.callThrough();
    spyOn(Service, 'removeItem').and.callThrough();
  });

  it('should be defined', () => {
    expect(component instanceof PeopleComponent).toBe(true);
  });

  it('should display a list of people OnInit', () => {
    Service.listOfStuff = [ 'John Doe', 'Kerry Walsh', 'Tony Vegas'];
    // First call sets bindings and calls ngOnInit
    fixture.detectChanges();

    expect(component.people.length).toEqual(3);
    expect(el.nativeElement.querySelectorAll('li').length).toEqual(3);
  });

  it('should add a name to list list of people', () => {
    component.newName = 'John Doe';
    component.add(component.newName);
    // call change detection
    fixture.detectChanges();
    // test that component calls service
    expect(Service.addItem).toHaveBeenCalled();
    // test that template has been updated
    expect(el.nativeElement.querySelectorAll('li').length).toBe(1);
  });

  it('should remove a name from list', () => {
    component.newName = 'John Doe';
    component.add(component.newName);
    // call change detection
    fixture.detectChanges();

    const button = el.nativeElement.querySelector('button:first-of-type');
    button.click();

    // call change detection
    fixture.detectChanges();
    // test that component calls service
    expect(Service.removeItem).toHaveBeenCalled();
    // test that template has been updated
    expect(el.nativeElement.querySelectorAll('li').length).toBe(0); 
  });

});