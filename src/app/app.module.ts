import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CargaComponent } from './pages/carga/carga.component';
import { FotosComponent } from './pages/fotos/fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CargaComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
