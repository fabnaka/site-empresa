import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Location } from '@angular/common';
import { AlertService } from './../../../services/util/alert.service';
// import {
//   BuscarParticipantePorIdGQL,
//   CriarAlterarParticipanteGQL,
// } from './../../../generated/graphql';
import { add, format } from 'date-fns';
import {
  BuscarGrupoParticipantePorIdGQL,
  CriarAlterarGrupoParticipanteGQL,
} from 'src/app/generated/graphql';

@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrls: ['./grupo-form.component.scss'],
})
export class GrupoFormComponent implements OnInit {
  formGroup: FormGroup;
  salvando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private criarAlterar: CriarAlterarGrupoParticipanteGQL,
    //private criarAlterar: CriarAlterarUsuarioGQL,
    private porId: BuscarGrupoParticipantePorIdGQL,
    //private porId: BuscarUsuarioPorIdGQL,
    private alert: AlertService,
  ) {
    this.formGroup = this.fb.group({
      id: [undefined],
      descricao: [undefined, Validators.required],
      ativo: [undefined],
    });
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.buscar(id);
    } else {
      this.formGroup.patchValue({ ativo: true });
    }
  }

  buscar(id: number) {
    this.porId
      .fetch({
        buscarGrupoParticipantePorIdId: id,
      })
      .subscribe(
        (rs) => {
          this.formGroup.patchValue({
            ...rs.data.buscarGrupoParticipantePorId,
            ativo: rs.data.buscarGrupoParticipantePorId?.ativo == 'S' ? true : false,
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
            descricao: this.formGroup.get('descricao')?.value,
            ativo: this.formGroup.get('ativo')?.value ? 'S' : 'N',
          },
        })
        .subscribe(
          (rs) => {
            this.alert.showSuccess('Grupo salvo com sucesso!');
            this.voltar();
          },
          (err) => {
            this.alert.showGQLError(err);
          },
        );
    }
  }

  voltar() {
    this.location.back();
  }
}
