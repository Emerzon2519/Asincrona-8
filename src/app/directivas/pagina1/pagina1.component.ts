import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }



  persona = { nombre: '', apellido: '', edad: 0 };
  personas = [ {nombre: 'Lorena', apellido: 'paredes', edad: 40} ];

  agregar(){
    this.personas.push(this.persona);
    this.persona = { nombre: '', apellido: '', edad: 0 };
  }
 
  // ValidacionUser(user:string){
  //   if(user == this.usuario){
  //     this.resultado = true;
  //     this.mensaje= `Bienvenido usuario`
  //   } else {
  //     this.resultado = false;
  //   }
  // }

  // ValidacionPas(pas:number){
  //   if(pas == this.password) {
  //     this.resultado = true;
  //   } else {
  //     this.resultado = false;
  //   }
  // }
  // nombre = "Juan Perez";
  // edad = 20;
  // sueldos = [1800,1500,1200];
  // usuario = "jperez";
  // resultado = false;
  // mensaje="";

  // Validar(user:string){
  // if(user == this.usuario){
  // this.resultado = true;
  // this.mensaje ="Usuario correcto";
  // }else{
  // this.resultado = false;
  // this.mensaje ="Usuario incorrecto";
  // }
  // }
}
