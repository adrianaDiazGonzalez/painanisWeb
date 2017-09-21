/**
 * Autor: Alejandro Estrada
 * Fecha: 21/09/2017
 * Descripcion: Manejo de inicio de sesion 
 * REST
 * 
 * Modificaciones:
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Conexion } from '../../progress/conexion';
import { UsuarioModel } from '../../modelos/sg/usuario.model';

@Injectable()
export class SesionService{

    constructor(private http: Http, private url: Conexion) { }

    postQuote(usuario: UsuarioModel): Promise<any> {

        let headers = new Headers();        
        headers.append("Content-Type", "application/json");

        return Promise.resolve(this.http.post(this.url.URL+"as_sgSesion_gen",
        JSON.stringify({
            "request": {
                "ipcUsuario": usuario.Contrasena,
                "ipcContrasena": usuario.Usuario
            }
        }),{ headers: headers }));

      }

}