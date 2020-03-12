import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {UtilisateurMockService} from './utilisateur/utilisateur.mock.service';
import {Utilisateur} from './shared/utilisateur';
@NgModule({

  declarations: [
    AppComponent,
    UtilisateurComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilisateurMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
