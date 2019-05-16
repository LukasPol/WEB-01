import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contato } from '../modelo/contato';

@Component({
  selector: 'app-add-contato',
  templateUrl: './add-contato.component.html',
  styleUrls: ['./add-contato.component.css']
})
export class AddContatoComponent implements OnInit {
  title = 'Cadastrar novo contato';
  contato: Contato;
  contatos: Contato[];

  constructor() { 
    this.contato = new Contato();
    this.contatos = [];
  }

  ngOnInit() {
  }

  adicionar(fm:FormGroup){
    this.contato = fm.value;
    this.contatos.push(this.contato);
    console.table(this.contatos);
  }

}
