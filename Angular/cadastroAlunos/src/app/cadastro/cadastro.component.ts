import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  verficiasenha(senha, confSenha, span) {
    if (senha !== confSenha) {
      span = 'block';
      // span.value = "As senhas devem ser iguais";
    }
  }

  cadastra(fm: FormGroup, span) {
    // console.log(span);
    console.log(fm.value.nome);
    this.verficiasenha(fm.value.senha, fm.value.confsenha ,span);
  }
}
