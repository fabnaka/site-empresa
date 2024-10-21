import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Location } from '@angular/common';
import { BuscarUsuarioPorIdGQL, CriarAlterarUsuarioGQL } from './../../../../app/generated/graphql';
import { AlertService } from './../../../../app/services/util/alert.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
})
export class UsuarioFormComponent implements OnInit {
  formGroup: FormGroup;

  salvando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private criarAlterar: CriarAlterarUsuarioGQL,
    private porId: BuscarUsuarioPorIdGQL,
    private alert: AlertService,
  ) {
    this.formGroup = this.fb.group({
      id: [undefined],
      nome: [undefined, Validators.required],
      usuario: [undefined],
      senha: [undefined],
      ativo: [undefined],
    });
  }

  async ngOnInit(): Promise<void> {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.buscar(id);
    } else {
      this.formGroup.patchValue({ ativo: true });
    }
  }

  voltar() {
    this.location.back();
  }

  buscar(id: number) {
    this.porId
      .fetch({
        buscarUsuarioPorIdId: id,
      })
      .subscribe(
        (rs) => {
          this.formGroup.patchValue({
            ...rs.data.buscarUsuarioPorId,
            ativo: rs.data.buscarUsuarioPorId?.ativo == 'S' ? true : false,
          });
        },
        (err) => {
          console.log(err);
        },
      );
  }

  salvar() {
    let values = this.formGroup;

    if(!this.formGroup.valid){
      return this.alert.showWarn("Todos os campos obrigatórios devem estar preenchidos")
    }

    if (this.formGroup.valid) {
      this.criarAlterar
        .mutate({
          data: {
            id: this.formGroup.get('id')?.value
              ? this.formGroup.get('id')?.value
              : null,
            usuario: this.formGroup.get('usuario')?.value,
            nome: this.formGroup.get('nome')?.value,
            senha: this.formGroup.get('senha')?.value,
            ativo: this.formGroup.get('ativo')?.value ? 'S' : 'N',
          },
        })
        .subscribe(
          (rs) => {
            this.alert.showSuccess('Usuário salvo com sucesso!');
            this.voltar();
          },
          (err) => {
            this.alert.showGQLError(err);
          },
        );
    }
  }
}
