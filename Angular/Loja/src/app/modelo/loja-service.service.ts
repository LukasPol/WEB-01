import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class LojaServiceService {
  private produtos: Produto[] = [
  {id:1, nome: "Galaxy J8", imagem: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133731/0/133731085_1GG.png",
      descricao: `O novo Samsung Galaxy J8 Violeta `,
      especificacao:"64GB Dual Chip Android 8.0 Tela 6 Octa-Core 1.8GHz 4G Câmera 16MP F1.7 + 5MP F1.9 (Dual Cam)", preco: 1249.00, desconto: 0},

  {id:2, nome: "Motorola Moto", imagem: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133453/2/133453249_1GG.png",
      descricao: `Melhor Celular da Motorola G6 Ouro`,
      especificacao:"Dual Chip Android Oreo - 8.0 Tela 5.7 Octa-Core 1.4 GHz 32GB 4G Câmera 13MP ", preco: 887.78, desconto: 90.0},

  {id:3, nome: "Smartphone Samsung Galaxy J6", imagem: "https://images-americanas.b2w.io/produtos/01/00/offers/01/00/item/133609/1/133609160_1GG.png",
      descricao: `O Samsung Galaxy J6 Preto`,
      especificacao:"32GB Dual Chip Android 8.0 Tela 5.6 Octa-Core 1.6GHz 4G Câmera 13MP com TV", preco: 849.00, desconto: 50}
  ]

  constructor() { 

  }

  getProdutos(){
    return this.produtos;
  }
}
