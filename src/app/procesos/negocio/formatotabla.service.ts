import { Injectable } from "@angular/core";

@Injectable()
export class FormatoTablas {
  private  esagregarproceso= "narrador agregar proceso"

    constructor(){}

 // narrador Agregar Proceso
  crearnuevoproceso( texto:string){
    //idnetificar los  nuevos procesos
    var listapalaras = texto.split(' ');
    var sumarPalabras='';
    listapalaras.forEach(element => {
        sumarPalabras = sumarPalabras + element;

        // "narrador agregar proceso".....
        // se agrega un proceso nuevo
        
        if(sumarPalabras.trim() ===  this.esagregarproceso.trim()){
            
        }

        // todas las palabras claves que se agregen, seran
        // para el proceso actual ano ser que se encuentre  el texto de  "narrador agregar proceso"


    });

  }



}