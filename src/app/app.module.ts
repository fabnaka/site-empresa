//ANGULAR MODULES
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//PRIMENG COMPONENTS
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AlertService } from './services/util/alert.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog'

//LUCIDE COMPONENTS
import {
  FileSpreadsheet,
  LogOut,
  LucideAngularModule,
  Menu,
  User,
  Users,
  X
} from 'lucide-angular';

//COMPONENTES DA APLICAÇÃO
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioListaComponent } from './admin/usuario/usuario-lista/usuario-lista.component';
import { SideBarMenuComponent } from './shared/components/side-bar-menu/side-bar-menu.component';
import { AdminComponent } from './admin/admin.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { LoginComponent } from './pages/login/login.component';
import { GraphQLModule } from './graphql.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UsuarioFormComponent } from './admin/usuario/usuario-form/usuario-form.component';
import { DatexPipe } from './shared/pipes/datex.pipe';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { EmpresaFormComponent } from './admin/grupo/empresa-form/empresa-form.component';
import { EmpresaListaComponent } from './admin/grupo/empresa-lista/empresa-lista.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    UsuarioListaComponent,
    UsuarioFormComponent,
    SideBarMenuComponent,
    AdminComponent,
    ModalComponent,
    LoginComponent,
    AdminHomeComponent,
    EmpresaFormComponent,
    EmpresaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    ButtonModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    CardModule,
    CalendarModule,
    TableModule,
    DialogModule,
    TooltipModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
    CheckboxModule,
    GraphQLModule,
    ApolloModule,
    HttpClientModule,
    ToastModule,
    MessagesModule,
    SharedModule,
    FileUploadModule,
    LucideAngularModule.pick({ FileSpreadsheet, LogOut, Menu, User, Users, X }),
    ImageModule,
    ProgressSpinnerModule,
    BlockUIModule,
    FormsModule,
    PanelModule,
    InputNumberModule,
    ConfirmDialogModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    AlertService,
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
