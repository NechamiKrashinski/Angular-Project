import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputNotValid]',
  standalone: true
})
export class InputNotValidDirective {
  @Input() valid: boolean = false;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseover') onMouseOver() {
    if (!this.valid) {
      this.renderer.setStyle(this.elemRef.nativeElement, 'border', 'red');
    }
  }
}
