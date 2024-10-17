import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginGQL } from '../../generated/graphql';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../services/util/alert.service';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  returnUrl: any;
  token: string | any;
  
  constructor(
    private fb: FormBuilder,
    private login: LoginGQL,
    private router: Router,
    private alert: AlertService,
    private message: MessageService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {

    this.token = this.route.snapshot.queryParamMap.get('token');
    
    if (this.token) {
      this.authService.saveSession(this.token);
    }

    this.formGroup = this.fb.group({
      usuario: [undefined],
      senha: [undefined]
    })
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') 
    if (this.authService.getSession()) {
      if  (this.returnUrl) {
        this.router.navigate([this.returnUrl]);
      } else {
        this.router.navigate(['admin'], {
          replaceUrl: true
        });
      }
    };
    
  }


  salvar() {
    let values = this.formGroup.value

    this.login.fetch({
      data: {
        usuario: this.formGroup.get('usuario')?.value,
        senha: this.formGroup.get('senha')?.value
      }
    }).subscribe(rs => {
      this.alert.showSuccess("Login efetuado com sucesso!")
      this.authService.saveSession(
        rs.data.login?.token
      )
      this.router.navigate(['/admin/admin-home']) 
    }, err => {
      this.alert.showGQLError(err);
      console.log(err);
    }) 
  }


}
