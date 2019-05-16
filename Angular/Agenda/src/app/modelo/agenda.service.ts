import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private contatos: Contato[];

  constructor() {
    this.contatos = [];
   }

   adicionarContato(c: Contato): boolean{
     if (c != null) {
        this.contatos.push(c);
        return true;
     }
     return false;
   }

   obterLista(): Contato[]{
     return this.contatos;
   }
}
