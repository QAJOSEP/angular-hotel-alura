import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { RegistroHuespedComponent } from './componentes/registro-huesped/registro-huesped.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/menu', component: MenuComponent},
  {path: 'login/menu/reservas', component: ReservasComponent},
  {path: 'login/menu/busqueda', component: BusquedaComponent},
  {path: 'login/menu/reservas/registro-huesped', component: RegistroHuespedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
