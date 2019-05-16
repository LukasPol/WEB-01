import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibir-msg',
  templateUrl: './exibir-msg.component.html',
  styleUrls: ['./exibir-msg.component.css']
})
export class ExibirMsgComponent implements OnInit {
  msg:string

  constructor() { 
    this.msg = '';
  }

  ngOnInit() {
  }

  alterarMensagem(n:string){
    this.msg =`Seja bemVindo, ${n}!!`;
  }

}
