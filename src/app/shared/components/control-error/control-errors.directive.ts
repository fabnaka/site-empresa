import { ComponentFactoryResolver, ComponentRef, Directive, Host, Inject, Input, Optional, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { EMPTY, merge, Observable } from 'rxjs';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { ControlErrorComponent } from './control-error.component';
import { FORM_ERRORS } from './form-errors';
import { FormSubmitDirective } from './form-submit.directive';

@Directive({
  selector: '[controlError]'
})
export class ControlErrorsDirective {

  ref: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  @Input() customErrors: any = {};

  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors:any,
    @Optional() @Host() private form: FormSubmitDirective,
    private controlDir: NgControl
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit() {
    merge(
      this.submit$,
      this.control?.valueChanges!
    ).subscribe((v) => {
      const controlErrors = this.control?.errors;
      if (controlErrors) {
        const firstKey:any = Object.keys(controlErrors)[0];
        const getError = this.errors[firstKey];
        const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
        this.setError(text);
      } else if (this.ref) {
        this.setError(null);
      }
    })
  }

  get control() {
    return this.controlDir.control;
  }

  setError(text: string | any) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.container.createComponent(factory);
    }

    this.ref.instance.text = text;
  }

  ngOnDestroy() { }

}