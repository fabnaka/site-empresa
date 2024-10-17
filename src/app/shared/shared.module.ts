import { Injector, NgModule } from "@angular/core";
import { DatexPipe } from "./pipes/datex.pipe";
import { InputMaskModule } from "primeng/inputmask";
import { NyTimeComponent } from "./components/ny-time/ny-time.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ControlErrorsDirective } from './components/control-error/control-errors.directive';
import { ControlErrorComponent } from "./components/control-error/control-error.component";
import { ControlErrorContainerDirective } from "./components/control-error/control-error-container.directive";
import { FormSubmitDirective } from "./components/control-error/form-submit.directive";

@NgModule({
    imports: [
        InputMaskModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DatexPipe,
        NyTimeComponent,
        ControlErrorsDirective,
        ControlErrorComponent,
        ControlErrorContainerDirective,
        FormSubmitDirective
    ],
    exports: [
        DatexPipe,
        NyTimeComponent,
        ControlErrorsDirective
    ],
    bootstrap: [ControlErrorComponent]
})
export class SharedModule { 
    
}