import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';


@Directive({
  selector: '[appDropdownOnClick]'
})
export class DropdownOnClickDirective {

  private isOpen = false;
  constructor(private el: ElementRef) {

  }

  @HostBinding('class.show') get opened() {
    return this.isOpen;
  }
  @HostListener('click') open() {
    this.isOpen = true;
    this.el.nativeElement.querySelector('.dropdown-tg').classList.add('show');
  }
  @HostListener('document:click', ['$event.target'])
  close(targetElement) {
    const inside: boolean = this.el.nativeElement.contains(targetElement);
    if (!inside) {
      this.isOpen = false;
      this.el.nativeElement.querySelector('.dropdown-tg').classList.remove('show');
    }
  }
}
