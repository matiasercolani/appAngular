import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Lab4';

  cambiarTitulo(){
    this.title = "erco";
  }

  // Ejercicio Clase 1

  edad1:number = 0;
  edad2:number = 0;
  resultadoPromedio:number = 0;
  resultadoSuma:number = 0;
  
  promedioSuma(){
    this.resultadoSuma = this.edad1 + this.edad2;
    this.resultadoPromedio = this.resultadoSuma / 2;
  }

  borrar(){
    this.edad1 = 0;
    this.edad2 = 0;
    this.resultadoPromedio = 0;
    this.resultadoSuma = 0;
  }

}
