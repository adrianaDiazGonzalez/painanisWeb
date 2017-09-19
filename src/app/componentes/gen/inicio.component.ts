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
import { Conexion } from '../../progress/conexion';
import swal from 'sweetalert2';

@Component({
    selector: 'Inicio',
    templateUrl: '../../vistas/gen/inicio.html'
})

export class InicioComponent {

    private usuario: string;
    private contrasena: string;
    private url: Conexion = new Conexion();


    /* Describe que modificaste */
    valida() {

        if ((this.usuario == "" || this.usuario == null) && (this.contrasena == "" || this.contrasena == null)) {
            swal('Oops...', 'Ingresa tu usuario y contraseña', 'error');
            return;
        } else if (this.usuario == "" || this.usuario == null) {
            swal('Oops...', 'Ingresa tu usuario', 'error');
            return;
        } else if (this.contrasena == "" || this.contrasena == null) {
            swal('Oops...', 'Ingresa tu contraseña', 'error');
            return;
        }

    }
    /* Fin */

}