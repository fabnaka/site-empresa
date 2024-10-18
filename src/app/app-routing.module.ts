import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UsuarioListaComponent } from './admin/usuario/usuario-lista/usuario-lista.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UsuarioFormComponent } from './admin/usuario/usuario-form/usuario-form.component';
import { EmpresaListaComponent } from './admin/grupo/empresa-lista/empresa-lista.component';
import { EmpresaFormComponent } from './admin/grupo/empresa-form/empresa-form.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: '', component: AdminHomeComponent },
          { path: 'admin-home', component: AdminHomeComponent },

          { path: 'usuario', component: UsuarioListaComponent },
          { path: 'usuario/criar', component: UsuarioFormComponent },
          { path: 'usuario/:id', component: UsuarioFormComponent },

          { path: 'empresa', component: EmpresaListaComponent },
          { path: 'empresa/:id', component: EmpresaFormComponent },
          { path: 'empresa/criar', component: EmpresaFormComponent },
        ],
      },
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent }
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
