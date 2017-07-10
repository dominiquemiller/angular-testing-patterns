import { FancyBoxDirective } from './fancy-box.directive';
import { DebugElement, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <ul>
      <li fancyBox> Hover on me</li>
    <ul> 
  `
})
class TestComponent {}

describe('FancyBoxDirectiveDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let hostElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FancyBoxDirective,
        TestComponent
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    // element that directive operates on, in our test component
    hostElement = fixture.debugElement.query(By.css('li'));
  });
  it('should create an instance', () => {
    const directive = new FancyBoxDirective();
    expect(directive).toBeTruthy();
  });

  it('should add a class to host element on mouseover', () => {
    hostElement.triggerEventHandler('mouseover', null);
    // detect change in template
    fixture.detectChanges();
    expect(hostElement.classes['box-outline']).toBe(true);
  });

  it('should remove a class to host element on mouseout', () => {
    hostElement.triggerEventHandler('mouseover', null);
    // detect change in template
    fixture.detectChanges();
    hostElement.triggerEventHandler('mouseout', null);
    // detect next change
    fixture.detectChanges();
    expect(hostElement.classes['box-outline']).toBe(false);
  });

});