import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai.service';
import { ActividadModel } from '../../modelo.objecto/actividad.model';
import { FormatoTablas } from '../../negocio/formatotabla.service';

@Component({
  selector: 'app-nuevo-proceso',
  templateUrl: './nuevo-proceso.component.html'
})
export class NuevoProcesoComponent {

  public childMessage: string='';

  recognition: any;
  isRecording = false;
  transcription = '';
  tituloProceso ='';
  public lista:ActividadModel[]= [];

  constructor(private openAIService: OpenaiService , private _formatoTablas:FormatoTablas) {

    this.recognition = new (window.SpeechRecognition ||
      (window as any).webkitSpeechRecognition)();
    this.recognition.lang = 'es-MX';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.recognition.addEventListener('result', (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      console.log(transcript);
      if(transcript.includes('nuevo procedimiento')){ 
        let listaPalabras = transcript.split(" ");
        let nombreTitulo = '';
        let posicion=-1;
        listaPalabras.forEach(function(value, index) { 
          if(value == 'procedimiento')
            posicion = index; 
          if(posicion != -1 && posicion < index)
            nombreTitulo += value + ' '; 
        }); 
        this.tituloProceso = nombreTitulo;
      }
      this.transcription =  this.transcription + ' '+transcript;
     openAIService.sendTranscript(transcript);
    });

    this.recognition.addEventListener('end', () => {
      if (this.isRecording) {
        this.recognition.start();
      }
    });
  }

  start() {
    this.isRecording = true;
    this.recognition.start();
  }

  stop() {
    this.isRecording = false;
    this.recognition.stop();
    this.childMessage = this.transcription;
    this._formatoTablas.crearnuevoproceso( this.childMessage);
    this.lista = this._formatoTablas.consultarLista();
    console.log(this.lista);
  }




}
