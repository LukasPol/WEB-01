import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  private consumo:number

  constructor() { }

  calculaConsumo(d, l){
    this.consumo = (d/l);
    // this.verificaRes(resultado);
  }
  verificaRes(res){
    res.textContent = this.consumo;
    // res.classList.removeAll();
    if (this.consumo>=14){
      res.classList = 'resultado green';
      console.log('1');
    } else if(this.consumo>=10 && this.consumo <14){
      res.classList = 'resultado yellow';
      console.log('2');
    } else {
      res.classList = 'resultado red';
      console.log('3');
    }
  }
}
