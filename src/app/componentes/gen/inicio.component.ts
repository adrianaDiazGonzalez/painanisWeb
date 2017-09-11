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
import { Conexion }  from '../../progress/conexion';

@Component({
    selector: 'Inicio',
    templateUrl: '../../vistas/gen/inicio.html'
})

export class InicioComponent{

    private usuario:string;
    private contrasena:string;
    private url:Conexion;

    ngOnInit(){
        this.url = new Conexion();
    }

    /* Describe que modificaste */
    valida(){

        console.log(this.usuario);
        console.log(this.contrasena);

        if(this.usuario != "" && this.contrasena != ""){
            console.log("Realizo algo");
            console.log(this.url.cURL);
        }

    }
    /* Fin */

}