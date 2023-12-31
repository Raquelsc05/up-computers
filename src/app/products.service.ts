import { Injectable } from '@angular/core';
import { IProduto, produtos } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  produtos: IProduto[] = produtos;
  

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number) {
  return this.produtos.find(produto => produto.id == produtoId);
  }
}
