import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { CurrentTimeComponent } from './componentes/current-time/current-time.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistroHuespedComponent } from './componentes/registro-huesped/registro-huesped.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BusquedaComponent,
    CurrentTimeComponent,
    LoginComponent,
    MenuComponent,
    RegistroComponent,
    RegistroHuespedComponent,
    ReservasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
