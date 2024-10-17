import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent, SelectItem, ConfirmationService } from 'primeng/api';
import { debounceTime } from 'rxjs/operators';
//import { FiltrarParticipanteGQL , FiltrarUsuarioGQL } from './../../../generated/graphql'
import { AlertService } from './../../../services/util/alert.service';
import {
  BuscarGrupoParticipantePorIdGQL,
  CriarAlterarGrupoParticipanteGQL,
  FiltrarGrupoParticipanteGQL,
} from 'src/app/generated/graphql';

@Component({
  selector: 'app-grupo-lista',
  templateUrl: './grupo-lista.component.html',
  styleUrls: ['./grupo-lista.component.scss'],
})
export class GrupoListaComponent implements OnInit {
  @ViewChild('dt', { static: true })
  private dt: any;
  formGroup: FormGroup;
  lastLazy: LazyLoadEvent | undefined;
  loading: boolean = true;
  dados: any | undefined[] = [];

  status: SelectItem[] = [
    { label: 'Todos', value: '' },
    { label: 'ATIVO', value: 'S' },
    { label: 'INATIVO', value: 'N' },
  ];

  columns: any[] = [
    { field: 'id', header: '#', w: '60', sort: true },
    { field: 'descricao', header: 'Descrição', sort: true },
    { field: 'azure_group_id', header: 'ID Azure', sort: true },
    { field: 'ativo', header: 'Ativo?', w: '80', sort: true },
    { field: 'acao', header: '', w: '80' },
  ];

  constructor(
    private fb: FormBuilder,
    //private filtrar: FiltrarUsuarioGQL,
    private criarAlterar: CriarAlterarGrupoParticipanteGQL,
    private filtrar: FiltrarGrupoParticipanteGQL,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private confirmationService: ConfirmationService
  ) {
    this.formGroup = this.fb.group({
      descricao: [undefined],
      ativo: [undefined],
    });
  }

  async ngOnInit(): Promise<void> {
    this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.dt.filter(value.descricao, 'descricao', 'lk');
      this.dt.filter(value.ativo, 'ativo', 'lk');
    });
  }

  load(event: any = this.lastLazy) {
    this.lastLazy = event;
    this.loading = true;

    this.filtrar
      .fetch({
        filter: event,
      })
      .subscribe(
        (rs) => {
          this.dados = rs.data.filtrarGrupoParticipante?.rows;
          this.loading = false;
        },
        (err) => {
          this.loading = false;
          console.log(err);
          this.alert.showGQLError(err);
        },
      );
  }

  editar(id: number) {
    this.router.navigate([id], {
      relativeTo: this.route,
    });
  }

  confirmar(row: any) {}

  criar() {
    this.router.navigate(['/admin/grupo/criar']);
  }

  excluir(id: number) {
    this.confirmationService.confirm({
      message: "Excluir Grupo?",
      header: "Confirmar Exclusão",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: () => {
        this.criarAlterar.mutate({
          data: {
            id: id,
            ativo: "N"
          },
        }).subscribe(rs => {
          this.alert.showSuccess('Grupo excluído com sucesso!');
          this.load();
        },err => {
          this.alert.showGQLError(err);
        })
      }
    })
  }
}
