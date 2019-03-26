import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDropdown]'
})
export class CustomDropdownDirective {

  private isOpen = false;
  constructor(private el: ElementRef) {

  }

  @HostBinding('class.show') get opened() {
    return this.isOpen;
  }
  @HostListener('mouseover') open() {
    this.isOpen = true;
    this.el.nativeElement.querySelector('.dropdown-menu').classList.add('show');
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
    this.el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
  }
}
