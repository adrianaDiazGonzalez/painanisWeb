import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { routing, appRoutingProviders } from './app.routing';

//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/gen/inicio.component';
import { CategoriaComponent } from './componentes/ope/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [
    appRoutingProviders,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
