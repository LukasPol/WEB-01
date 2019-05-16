import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../modelo/consumo.service';

@Component({
  selector: 'app-exibir-consumo',
  templateUrl: './exibir-consumo.component.html',
  styleUrls: ['./exibir-consumo.component.css']
})
export class ExibirConsumoComponent implements OnInit {

  constructor(private c: ConsumoService) { }

  ngOnInit() {
  }

  verificaRes(Res){}

}
