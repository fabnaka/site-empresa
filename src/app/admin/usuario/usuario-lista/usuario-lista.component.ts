import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent, SelectItem } from 'primeng/api';
import { debounceTime } from 'rxjs/operators';
import { FiltrarUsuarioGQL } from '../../../generated/graphql';
import { AlertService } from '../../../services/util/alert.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss'],
})
export class UsuarioListaComponent implements OnInit {
  @ViewChild('dt', { static: true })
  private dt: any;
  formGroup: FormGroup;
  totalDados: number = 0;
  lastLazy: LazyLoadEvent | undefined;
  loading: boolean = true;

  status: SelectItem[] = [
    { label: 'Todos', value: '' },
    { label: 'ATIVO', value: 'S' },
    { label: 'INATIVO', value: 'N' },
  ];

  dados: any | undefined[] = [];

  columns: any[] = [
    { field: 'id', header: '#', w: '60', sort: true },
    { field: 'usuario', header: 'Usuario', sort: true },
    { field: 'ativo', header: 'Status', w: '80', sort: true },
    { field: 'acao', header: '', w: '80' },
  ];

  constructor(
    private fb: FormBuilder,
    private filtrar: FiltrarUsuarioGQL,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
  ) {
    this.formGroup = this.fb.group({
      usuario: [undefined],
      status: [undefined],
    });
  }

  async ngOnInit(): Promise<void> {
    this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.dt.filter(value.usuario, 'usuario', 'lk');
      this.dt.filter(value.status, 'ativo', 'lk');
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
          // let usuarios = rs.data.filtrarUsuario?.rows;
          this.dados = rs.data.filtrarUsuario?.rows;
          this.totalDados = rs.data.filtrarUsuario?.count
            ? rs.data.filtrarUsuario?.count
            : 0;

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
    this.router.navigate(['/admin/usuario/criar']);
  }
}
