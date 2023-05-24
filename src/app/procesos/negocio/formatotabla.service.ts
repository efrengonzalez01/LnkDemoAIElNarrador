import { Injectable } from "@angular/core";
import { ActividadModel } from "../modelo.objecto/actividad.model";

@Injectable()
export class FormatoTablas {

  private listaActividades: ActividadModel[] = [];
  private  esagregarproceso= "narrador agregar proceso";
  private  esagregaactividad= "narrador actividad";
  private  esagregarol= "narrador rol";
  private  esagregadescripcion= "narrador descripción";
  private  esagregarsubtema= "narrador subtema";
  private  claveNarrador= "narrador";

    constructor(){}

 // narrador Agregar Proceso
  crearnuevoproceso( texto:string){
    this.listaActividades=[];
    //idnetificar los  nuevos procesos
    var listapalaras = texto.split(' ');
    var sumarPalabras:string="";
    var _newtema = "<br /> * ";
    var  index=0;
    listapalaras.forEach(element => {
        sumarPalabras = sumarPalabras +" " +element;

        // "narrador agregar proceso".....
        // se agrega un proceso nuevo
        
        if(sumarPalabras.trim() ===  this.esagregarproceso.trim()){
          var _actividad = new ActividadModel(); 
          _actividad.numero=  index +1
          this.listaActividades.push(_actividad);
          index= index+1;
          sumarPalabras="";
        }

        
        if(sumarPalabras.indexOf( this.esagregaactividad.trim()) >0){
          var contador = this.cuantosRepetidos(sumarPalabras.split(' '), this.claveNarrador);
          if(contador==2)
          {
            sumarPalabras= sumarPalabras.replace(this.esagregaactividad.trim() , "");
            sumarPalabras=sumarPalabras.replace(this.claveNarrador.trim() , "");
            this.listaActividades[index-1].actividad= sumarPalabras;
            sumarPalabras="";
            sumarPalabras=' narrador'
          }  
        }

        if(sumarPalabras.indexOf( this.esagregarol.trim()) >0){
          var contador = this.cuantosRepetidos(sumarPalabras.split(' '), this.claveNarrador);
          if(contador==2)
          {
            sumarPalabras= sumarPalabras.replace(this.esagregarol.trim() , ""); 
            sumarPalabras=sumarPalabras.replace(this.claveNarrador.trim() , "");
            this.listaActividades[index-1].rol= sumarPalabras;
            sumarPalabras="";
            sumarPalabras=' narrador'
          }  
        }

        
        if(sumarPalabras.indexOf( this.esagregadescripcion.trim()) >0){
          var contador = this.cuantosRepetidos(sumarPalabras.split(' '), this.claveNarrador); 
          if(contador==1)
          {
            var txtinsert= sumarPalabras.replace(this.esagregadescripcion.trim() , ""); 
            txtinsert =txtinsert.replace(this.claveNarrador.trim() , "");
            this.listaActividades[index-1].descripcion=   txtinsert; 
          }
          if(contador==2){
            sumarPalabras= sumarPalabras.replace(this.esagregarol.trim() , ""); 
            sumarPalabras=sumarPalabras.replace(this.claveNarrador.trim() , "");
            sumarPalabras="";
            sumarPalabras=' narrador'
          }  
        }

        

        // todas las palabras claves que se agregen, seran
        // para el proceso actual ano ser que se encuentre  el texto de  "narrador agregar proceso"
        if(sumarPalabras.indexOf( this.esagregarsubtema.trim()) >0){
          var contador = this.cuantosRepetidos(sumarPalabras.split(' '), this.claveNarrador);
         
          if(contador==1)
          {
            var txtinsert= sumarPalabras.replace(this.esagregarsubtema.trim() , ""); 
            txtinsert =txtinsert.replace(this.claveNarrador.trim() , "");
            this.listaActividades[index-1].descripcion= this.listaActividades[index-1].descripcion + _newtema + txtinsert; 
          }
          if(contador==2){
            sumarPalabras= sumarPalabras.replace(this.esagregarsubtema.trim() , ""); 
            sumarPalabras=sumarPalabras.replace(this.claveNarrador.trim() , "");
            sumarPalabras="";
            sumarPalabras=' narrador'
          }  
          _newtema=''; 
        }
        

    }); 

    //console.log("Palabras",sumarPalabras );
  }
  private  cuantosRepetidos(array: any, elemento : any) {
    var contador = 0;
    for (var i = 0; i < array.length; i++) { 
        if(array[i] === elemento) {
          contador++;
        } 
    }
    return contador;
  }

    public consultarLista():ActividadModel[]{
      return this.listaActividades;
    }


}