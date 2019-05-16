import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contato } from '../modelo/contato';
import { AgendaService } from '../modelo/agenda.service';
import { rootRenderNodes } from '@angular/core/src/view';
import { ExibirContatoComponent } from '../exibir-contato/exibir-contato.component';

@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})
export class AdicionaContatoComponent implements OnInit {
  title = 'Cadastrar novo contato';
  contato: Contato;
  img = '../assets/images/helloworld.gif';
  

  constructor(private as: AgendaService) {
    this.contato = new Contato();

  }

  ngOnInit() {
  }

  adicionar(fm: FormGroup) {
    this.contato = fm.value;
    this.as.adicionarContato(this.contato);
  }
}
