
import { InjectionToken } from '@angular/core';


export const defaultErrors = {
  required: (error:any) => `Campo obrigatório.`,
  minlength: ({requiredLength, actualLength } : {requiredLength:any, actualLength:any}) => `Expect ${requiredLength} but got ${actualLength}.`,
  ipValidator: (error:any) => `End. de IP inválido.`
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});


