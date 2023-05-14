import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { OpenaiService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-nuevo-proceso',
  templateUrl: './nuevo-proceso.component.html'
})
export class NuevoProcesoComponent {

  
  recognition: any;
  isRecording = false;
  transcription = '';
  tituloProceso ='';

  constructor(private openAIService: OpenaiService ) {

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
      this.transcription = transcript;
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
  }

}