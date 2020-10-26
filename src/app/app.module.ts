import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CargaComponent } from './pages/carga/carga.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from "angularfire2/firestore";
import { environment } from "../environments/environment";
import { CargaImagenesService } from "./services/carga-imagenes.service";
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CargaComponent,
    FotosComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    // firebase.initializeApp(environment.firebase);
    AngularFirestoreModule,
    //AngularFireDatabaseModule
  ],
  providers: [
    CargaImagenesService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
