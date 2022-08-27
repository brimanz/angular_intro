import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;

  //tarea
  base  : number = 5;


  operacion(valor: number){
    this.numero += valor;
  }
}
