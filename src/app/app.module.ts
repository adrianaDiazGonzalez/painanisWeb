import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
