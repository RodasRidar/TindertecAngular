import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponenteComponent } from './bienvenida-componente/bienvenida-componente.component';
import { BuscarAmistadComponent } from './buscar-amistad/buscar-amistad.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { MantenerUsuarioComponentComponent } from './mantener-usuario-component/mantener-usuario-component.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponenteComponent,
    BuscarAmistadComponent,
    ChatComponentComponent,
    MantenerUsuarioComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
