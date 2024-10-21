import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent, SelectItem, ConfirmationService } from 'primeng/api';
import { debounceTime } from 'rxjs/operators';
import { AlertService } from '../../../services/util/alert.service';
import { CriarAlterarEmpresaGQL , FiltrarEmpresaGQL, } from 'src/app/generated/graphql';

@Component({
  selector: 'app-empresa-lista',
  templateUrl: './empresa-lista.component.html',
  styleUrls: ['./empresa-lista.component.scss'],
})
export class EmpresaListaComponent implements OnInit {
  @ViewChild('dt', { static: true })
  private dt: any;
  formGroup: FormGroup;
  lastLazy: LazyLoadEvent | undefined;
  loading: boolean = true;
  dados: any | undefined[] = [];

  columns: any[] = [
    { field: 'id', header: '#', w: '60', sort: true },
    { field: 'nome', header: 'Nome', sort: true },
    { field: 'cnpj', header: 'CNPJ' },
    { field: 'telefone', header: 'Telefone' },
    { field: 'email', header: 'Email' },
    { field: 'acao', header: '', w: '80' },
  ];

  constructor(
    private fb: FormBuilder,
    //private filtrar: FiltrarUsuarioGQL,
    private criarAlterar: CriarAlterarEmpresaGQL,
    private filtrar: FiltrarEmpresaGQL,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private confirmationService: ConfirmationService
  ) {
    this.formGroup = this.fb.group({
      nome: [undefined]
    });
  }

  async ngOnInit(): Promise<void> {
    this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.dt.filter(value.nome, 'nome', 'lk');
    });
  }

  load(event: any = this.lastLazy) {
    this.lastLazy = event;
    this.loading = true;

    console.log(event)

    this.filtrar
      .fetch({
        filter: event,
      })
      .subscribe(
        (rs) => {
          this.dados = rs.data.filtrarEmpresa?.rows;
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
    this.router.navigate(['/admin/empresa/criar']);
  }

  excluir(id: number) {
    this.confirmationService.confirm({
      message: "Excluir Empresa?",
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
          this.alert.showSuccess('Empresa excluído com sucesso!');
          this.load();
        },err => {
          this.alert.showGQLError(err);
        })
      }
    })
  }
}
