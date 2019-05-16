import { Component, OnInit } from '@angular/core';
import { LojaServiceService } from '../modelo/loja-service.service';
import { Produto } from '../modelo/produto';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  private produtos: Produto[];

  constructor(private ls: LojaServiceService) { }

  ngOnInit() {
  }

  public getProdutos(){
    return this.ls.getProdutos();
  }
}
