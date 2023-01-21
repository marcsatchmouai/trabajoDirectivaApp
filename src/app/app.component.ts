import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = "Registro de Usuario";
  mensaje:string="";
  registrado:boolean=false;
  nombre:string="";
  apellido:string="";
  //entradas:any[];
  entradas:Array<{titulo:string}>

  constructor(){
    this.entradas=[
      {titulo:"Python cada día mas presente"},
      {titulo:"Java presente desde hace 20 años"},
      {titulo:"Javascript cada dia mas funcional"},
      {titulo:"Kotilin potencia para tus apps"},
      {titulo:"Donde quedo Pascal?"},
      {titulo:"Prueba"}

    ]
  }

  registrarUsuario():void{
    this.registrado=true;
    this.mensaje = "usuario registrado con exito";
  }
}
