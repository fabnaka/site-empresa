import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth/auth.service'
 
@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.scss'],
})
export class SideBarMenuComponent implements OnInit {
  showMobileMenu: boolean = false;
  usuario: string;
  model: any[];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.usuario = this.authService.getUser()?.nome as string;

    this.model = [
      { label: 'Reunião', icon: 'fa fa-briefcase', routerLink: 'reuniao' },
      {
        label: 'Participante',
        icon: 'pi pi-users',
        routerLink: 'participante',
      },
      {
        label: 'Grupo',
        icon: 'fa fa-users',
        routerLink: 'grupo',
      },
      { label: 'Usuário', icon: 'pi pi-user', routerLink: 'usuario' },
    ];
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  logout() {
    this.authService.removeSession();
  }

  rota(rota: any) {
    this.router.navigate([`admin/${rota}`]);
  }

  home() {
    this.router.navigate(['home']);
  }
}