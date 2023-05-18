import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click') onClick(){
    window.scrollTo({ top: 0, behavior: "smooth" });
}
  @HostListener('document:scroll') scrollY() {
    window.scrollY > 500 ? this.el.nativeElement.style.opacity = 1 :  this.el.nativeElement.style.opacity  = 0
  }
}
