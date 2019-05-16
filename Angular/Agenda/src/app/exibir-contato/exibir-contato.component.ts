import { Component, OnInit, Input } from '@angular/core';
import { AgendaService } from '../modelo/agenda.service';
import { Contato } from '../modelo/contato';

@Component({
  selector: 'app-exibir-contato',
  templateUrl: './exibir-contato.component.html',
  styleUrls: ['./exibir-contato.component.css']
})
export class ExibirContatoComponent implements OnInit {
  title = 'Exibindo os contatos';
  @Input() contatos: Contato[];

  constructor(private as: AgendaService) {

  }

  ngOnInit() {
  }
  exibircontato(){
    let contatos = this.as.obterLista();
    console.log(contatos)
  }
}
