import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as datefns from 'date-fns';

@Component({
  selector: 'app-ny-time',
  templateUrl: './ny-time.component.html',
  styleUrls: ['./ny-time.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NyTimeComponent),
    multi: true
  }]
})
export class NyTimeComponent implements ControlValueAccessor {

  value: any = undefined;
  @Input() disabled: boolean;
  @Input() style = {};
  @Input() placeholder = ``;

  constructor() { }

  private onChange(_: any) { }

  private onTouch() { }

  writeValue(value: any): void {
    if (value) {
      let date;
      if (typeof value === "string") {
        date = datefns.parse(value, 'HH:mm:ss', new Date());
      } else if (typeof value === "object") {
        date = value;
      }
      this.value = datefns.format(date, 'HH:mm');
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange() {
    if (!this.isValidDate(this.value)) {
      this.value = null;
    } else {
      const date = datefns.parse(this.value, 'HH:mm', new Date());
      this.onChange(datefns.format(date, 'HH:mm:ss'));
    }
  }

  onInputBlur(event:any) {
    if (!this.isValidDate(this.value)) {
      this.onChange(null);
    }
  }

  isValidDate(value:any) {
    const date = datefns.parse(value, 'HH:mm', new Date());
    return datefns.isValid(date);
  }

}
