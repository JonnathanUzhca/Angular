import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient :HttpClient,
                private loginService :LoginService){}

    cargarPerdona(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Persona[]>('https://listado-personas-415d7-default-rtdb.firebaseio.com/datos.json?auth='+token);
    }
    guardarPersonas(personas :Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-415d7-default-rtdb.firebaseio.com/datos.json?auth='+token,personas)
        .subscribe(
            response => {
                console.log("Resultado guardado Persona"+response);
            },
            error =>console.log('Error al guardar personas'+error)


        )
    }

    modificarPersona(index : number ,persona :Persona){
        const token = this.loginService.getIdToken();
        let url :string;
        url='https://listado-personas-415d7-default-rtdb.firebaseio.com/datos/'+ index +'.json?auth='+token;
        this.httpClient.put(url, persona)
        .subscribe(
            response =>console.log("resultado de modificacion "+ response),
            error => console.log("Error al dar la  respuesta del modificar "+error)
        )
    }

    elimidarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url :string;
        url='https://listado-personas-415d7-default-rtdb.firebaseio.com/datos/'+ index +'.json?auth='+token;
        this.httpClient.delete(url)
        .subscribe(
            response =>console.log("resultado de eliminar "+ response),
            error => console.log("Error al dar la  respuesta del eliminar "+error)
        )

    }
}