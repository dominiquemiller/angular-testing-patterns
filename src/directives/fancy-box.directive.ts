import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[fancyBox]'
})
export class FancyBoxDirective {
  @HostBinding('class.box-outline')
  hoverOver: boolean;

  constructor() { }

  @HostListener('mouseover')
  mouseover() {
    this.hoverOver = true;
  }

  @HostListener('mouseout')
  mouseout() {
    this.hoverOver = false;
  }

}
