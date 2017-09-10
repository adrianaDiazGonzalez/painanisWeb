/**
 * Autor: Alejandro Estrada
 * Fecha: 09/09/2017
 * Descripcion: Muestra la pantalla de inicio de la aplicacion,
 * asi como su logica
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-20 Fn-22
 */
import { Component } from '@angular/core';

@Component({
    selector: 'Inicio',
    templateUrl: '../../vistas/gen/inicio.html'
})

export class InicioComponent{

    private usuario:string;
    private contrasena:string;

    /* Describe que modificaste */
    constructor(){
        this.usuario = "Alex";
        this.contrasena = "1234";
    }
    /* Fin */
}