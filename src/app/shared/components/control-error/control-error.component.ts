import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  template: `
    <small [class.hide]="_hide" class="p-error">{{_text}}</small>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./control-error.component.scss']
})
export class ControlErrorComponent implements OnInit {

  _text: string;
  _hide = true;

  @Input() set text(value: string) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
