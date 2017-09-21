import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { routing, appRoutingProviders } from './app.routing';

//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/gen/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
