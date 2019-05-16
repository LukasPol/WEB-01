import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../modelo/consumo.service';

@Component({
  selector: 'app-pega-consumo',
  templateUrl: './pega-consumo.component.html',
  styleUrls: ['./pega-consumo.component.css']
})
export class PegaConsumoComponent implements OnInit {

  constructor(private c:ConsumoService) { }

  ngOnInit() {
  }

  calcula(distancia,litros,resultado){
    this.c.calculaConsumo(distancia,litros);
    this.c.verificaRes(resultado);
  }

}
