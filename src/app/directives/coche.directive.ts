import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cocheAzul]'
})
export class CocheDirective {

  constructor(private color:ElementRef) {
    this.color.nativeElement.style.color = 'purple';
  }

}
