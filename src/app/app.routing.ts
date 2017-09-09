import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { InicioComponent } from './componentes/gen/inicio.component';

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: '**', component: InicioComponent} //Path para errores
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);