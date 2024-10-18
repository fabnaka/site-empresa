import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Location } from '@angular/common';
import { AlertService } from '../../../services/util/alert.service';
import { add, format } from 'date-fns';
import { BuscarEmpresaPorIdGQL, CriarAlterarEmpresaGQL } from 'src/app/generated/graphql';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.scss'],
})
export class EmpresaFormComponent implements OnInit {
  formGroup: FormGroup;
  salvando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private criarAlterar: CriarAlterarEmpresaGQL,
    private porId: BuscarEmpresaPorIdGQL,
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
        buscarEmpresaPorIdId: id,
      })
      .subscribe(
        (rs) => {
          this.formGroup.patchValue({...rs.data.buscarEmpresaPorId})},
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
            nome: this.formGroup.get('nome')?.value,
            cnpj: this.formGroup.get('cnpj')?.value,
            endereco: this.formGroup.get('endereco')?.value,
            telefone: this.formGroup.get('telefone')?.value,
            email: this.formGroup.get('email')?.value
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
