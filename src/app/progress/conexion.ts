/**
 * Autor: Alejandro Estrada
 * Fecha: 09/09/2017
 * Descripcion: Maneja la informacion de conexion a los servicios
 * REST
 * 
 * Modificaciones:
 * <Quien modifico:> <Cuando modifico:> <Donde modifico:>
 * Ejemplo: Alejandro Estrada 09/09/2017 In-15 Fn-19
 */

 export class Conexion{
    private cURL:string = "http://192.168.2.153:8810/Painanis/rest/painanis/";

    /* Se crea una propiedad publica */
    public get URL():string{
        return this.cURL;
    }
    /* Fin */
 }