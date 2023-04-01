import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  
  num1 : number = 0; 
  num2 : number = 0;
  soma : number = 0;
  Subtrair: number = 0;
  mult: number = 0;
  divisao: number = 0;
  RestoDiv: number = 0;

   somar(){
      this.soma = this.num1 + this.num2;
   }

  subtrair(){
    this.Subtrair = this.num1 - this.num2;
  }

  multiplicar(){
    this.mult = this.num1 * this.num2;
  }

  dividir(){
    this.mult = this.num1 / this.num2;
  }

  restodiv(){
    this.RestoDiv = this.num1 % this.num2;
  }

}

