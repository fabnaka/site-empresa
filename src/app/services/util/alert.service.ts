import { Injectable } from '@angular/core';
import { GraphQLError } from 'graphql';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private messageService: MessageService) {}

  showSuccess(detail: string, summary: string = 'Sucesso') {
    this.messageService.add({
      severity: 'success',
      summary: summary,
      detail: detail,
      life: 4000,
    });
  }

  showError(detail: string, summary: string = 'Erro') {
    this.messageService.add({
      severity: 'error',
      summary: summary,
      detail: detail,
      life: 4000,
    });
  }

  showWarn(detail: string, summary: string = 'Atenção') {
    this.messageService.add({
      severity: 'warn',
      summary: summary,
      detail: detail,
      life: 4000,
    });
  }

  showInfo(detail: string, summary: string = 'Atenção') {
    this.messageService.add({
      severity: 'info',
      summary: summary,
      detail: detail,
      life: 4000,
    });
  }

  showGQLError(err: GraphQLError) {
    this.messageService.add({
      severity: 'error',
      summary: err.name && err.name === 'Error' ? 'Erro' : err.name,
      detail: err.message,
      life: 4000,
    });
  }
}
