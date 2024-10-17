import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UsuarioLogadoGQL } from '../generated/graphql';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loading:boolean = true

  constructor(
    private usuarioLogado: UsuarioLogadoGQL,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.buscarUsuarioLogado()
  }

  buscarUsuarioLogado() {
    this.usuarioLogado.fetch().subscribe(rs => {
      let usuario = rs.data.usuarioLogado;
      if (usuario) {
        this.authService.saveUser({
          id: usuario.id,
          nome: usuario.nome as string
        });
        this.loading = false;
      } else {
        this.authService.removeSession();
      }
    }, err => {
      console.log(err)
    });
  }

}
