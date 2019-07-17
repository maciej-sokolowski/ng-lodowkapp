import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appDateLabel]'
})
export class DateLabelDirective {

  day = 86400000;   // miliseconds in day

  constructor(private el: ElementRef) {
  }

  @Input() set appDateLabel(expiryDate: Date) {
    if ((expiryDate.valueOf() - Date.now().valueOf()) > 10 * this.day) {
      console.log(this.el.nativeElement.children);
    }

  }
}
