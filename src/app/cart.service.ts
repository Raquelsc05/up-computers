import { Injectable } from '@angular/core';
import { IProductCart } from './products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  itens: IProductCart[] = [];

  constructor() { }

  getCart(){
    this.itens = JSON.parse(localStorage.getItem("cart") || "[]");
    return this.itens;
  }

  addToCart(products: IProductCart) {
   this.itens.push(products);
   localStorage.setItem("cart", JSON.stringify(this.itens));
  }

  removeProductCart(productId: number){
   this.itens = this.itens.filter(item => item.id !== productId);
   localStorage.setItem("cart", JSON.stringify(this.itens));

  }

  clearCart(){
    this.itens = [];
    localStorage.clear();
  }
}
