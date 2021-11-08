import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tambor:boolean;
  bateria:boolean;
  piano:boolean;
  audioTambor = new Audio();
  audioBateria = new Audio();
  audioPiano = new Audio();
  tipoTecla:string;
  volumenPiano:number;
  volumenBateria:number;
  volumenTambor:number;

  constructor(){
    this.tipoTecla = 'piano';
    this.tambor = false;
    this.audioTambor.loop = true;
    this.audioBateria.loop = true;
    this.audioPiano.loop = true;
    this.bateria = false;
    this.piano = false;
    this.volumenBateria = 100;
    this.volumenPiano = 100;
    this.volumenTambor = 100;
  }

  aplicarTeclasSonido(numero:number):void{

    const audio = new Audio();

    switch(this.tipoTecla){
      case 'piano':
        audio.src = `../assets/sonidos/note${numero}.wav`;
      break;

      case 'marimba':
        audio.src = `../assets/sonidos/marimbanote${numero}.mp3`;
      break;

      case 'cello':
      audio.src = `../assets/sonidos/cellonote${numero}.mp3`;

      break;
    }
   
    audio.load();
    audio.play();

  }

  aplicarTambor():void{
    this.audioTambor.src = `../assets/sonidos/tambor-de-circuito.mp3`;
    if(!this.tambor){
      this.audioTambor.play(); 
    }else{
      this.audioTambor.pause();  
    }
      this.tambor = !this.tambor;
  }

  aplicarBateria():void{
    this.audioBateria.src = `../assets/sonidos/bateria.mp3`;
    if(!this.bateria){ 
      this.audioBateria.play(); 
    }else{
      this.audioBateria.pause();  
      
    }
    this.bateria = !this.bateria;
    
  }

  aplicarPiano():void{
    this.audioPiano.src = '../assets/sonidos/piano.mp3'; 
    if(!this.piano){
      this.audioPiano.play();
    }else{  
      this.audioPiano.pause();
    }
    this.piano = !this.piano;
  }

  seleccionarTipoTecla(tipoTecla:string){
    this.tipoTecla = tipoTecla;
  }

  cambiarVolumen(sonido:string){
    
    switch(sonido){
      case 'tambor':
        this.audioTambor.volume = this.volumenTambor*0.01;
        break;
      case 'bateria':
        this.audioBateria.volume = this.volumenBateria*0.01;
      break;  

      case 'piano':
        this.audioPiano.volume = this.volumenPiano*0.01;
      break;
    }
    
  }
}
