import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { PeopleComponent } from './people.component';
import {  SyncService } from '../../services/sync.service';

describe('PeopleComponent', () => {
  let fixture: ComponentFixture<PeopleComponent>;
  let component: PeopleComponent;
  let el: DebugElement;

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
  });

  it('should be defined', () => {
    console.log(component);
  });

});