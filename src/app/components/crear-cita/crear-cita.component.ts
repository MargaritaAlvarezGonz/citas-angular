import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  nombre= '';
  fecha= '';
  hora= '';
  mensaje='';

  formularioIncorrecto=false;
  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  agregarCita(){
    if(this.nombre === '' || this.fecha === '' || this.hora === '' || this.mensaje === '' ){
      this.formularioIncorrecto=true;
      return
    }
    this.formularioIncorrecto = false;


    //este objeto es el que se va a enviar al padre
    const CITA ={
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      mensaje: this.mensaje
    }
    this.nuevaCita.emit(CITA);
    this.resetCampos();
  }
  //método para resetear los campos
  resetCampos(){
  this.nombre= '';
  this.fecha= '';
  this.hora= '';
  this.mensaje='';
  }

}
