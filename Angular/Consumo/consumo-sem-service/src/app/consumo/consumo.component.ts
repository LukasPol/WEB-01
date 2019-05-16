import { Component, OnInit } from '@angular/core';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {
  consumo: number;

  constructor() { }

  ngOnInit() {
  }


  calcular(distancia, litros, barra) {
    this.consumo = (distancia / litros);
    barra.textContent = this.consumo;
    console.log(barra.className);
    if (this.consumo < 10) {
      barra.classList.add('red');
      
    }
    else if (this.consumo >= 10 && this.consumo < 14) {
      barra.classList.add('yellow');
    }

    else {
      barra.classList.add('green');
    }
  }

}
