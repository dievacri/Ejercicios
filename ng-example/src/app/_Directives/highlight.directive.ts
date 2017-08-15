import {Directive, ElementRef, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})

export class HighlightDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(element.nativeElement, 'backgroundColor', 'yellow');
  }
}
