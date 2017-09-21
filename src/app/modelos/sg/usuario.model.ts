/**
 * Autor: Alejandro Estrada
 * Fecha: 21/09/2017
 * Descripcion: Clase para el manejo de inicio de sesion
 * 
 * Modificaciones:
 * 
 */
export class UsuarioModel{
    private cUsuario:     string;
    private cContrasena:  string;

    public get Usuario():string{
        return this.cUsuario;
    }

    public set Usuario(cUsuario:string){
        this.cUsuario = cUsuario;
    }

    public get Contrasena():string{
        return this.cContrasena;
    }

    public set Contrasena(cContrasena:string){
        this.cContrasena = cContrasena;
    }

}