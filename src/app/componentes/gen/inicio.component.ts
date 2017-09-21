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
import swal from 'sweetalert2';

import { UsuarioModel } from '../../modelos/sg/usuario.model';
import { SesionService } from '../../servicios/sg/sesion.service';
import { Conexion } from '../../progress/conexion';

@Component({
    selector: 'Inicio',
    providers: [SesionService,Conexion,UsuarioModel],
    templateUrl: '../../vistas/gen/inicio.html'
})

export class InicioComponent {

    constructor(private usuarioModel: UsuarioModel, private sesionService: SesionService) { }

    /* Describe que modificaste */
    valida() {

        if ((this.usuarioModel.Usuario == "" || this.usuarioModel.Usuario == null) && (this.usuarioModel.Contrasena == "" || this.usuarioModel.Contrasena == null)) {
            swal('Oops...', 'Ingresa tu usuario y contraseña', 'error');
            return;
        } else if (this.usuarioModel.Usuario == "" || this.usuarioModel.Usuario == null) {
            swal('Oops...', 'Ingresa tu usuario', 'error');
            return;
        } else if (this.usuarioModel.Contrasena == "" || this.usuarioModel.Contrasena == null) {
            swal('Oops...', 'Ingresa tu contraseña', 'error');
            return;
        }

        this.sesionService.postQuote(this.usuarioModel).then((resolve) => {
            resolve
                .map(response => response.json())
                .subscribe(result => {
                    if (result.response.opcMensaje != "") {
                        swal('Oops...', 'Usuario y/o contraseña incorrectos', 'error');
                        return;
                    }
                }, error => {
                    swal('Oops...', 'Algo salio mal, intentalo más tarde', 'error');
                });
        })

    }
    /* Fin */

}