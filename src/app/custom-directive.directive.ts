import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(public renderer: Renderer2, public element: ElementRef) {
    this.renderer.setStyle(this.element.nativeElement, 'background','red');
    // this.renderer.addClass(this.element.nativeElement, 'directiveClass');
  }

}
