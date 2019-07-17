import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appDateLabel]'
})
export class DateLabelDirective {

  @Input() appDateLabel: Date;

  constructor(private el: ElementRef) {
  }

}
