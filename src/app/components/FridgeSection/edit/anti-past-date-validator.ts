import {AbstractControl} from '@angular/forms';

export function AntiPastDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const date: Date = new Date(control.value);
  if (date.valueOf() < Date.now().valueOf()) {
    return {'pastDate': true};
  }
  return null;


}
