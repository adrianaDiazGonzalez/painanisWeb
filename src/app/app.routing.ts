import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './componentes/gen/inicio.component';
import { CategoriaComponent } from './componentes/ope/categoria.component';

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'index', component: CategoriaComponent},
    {path: '**', component: InicioComponent} //Path para errores
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);