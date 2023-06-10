import { Component, OnInit } from '@angular/core';
import { IProduto } from '../products';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
private productsService: ProductsService,
private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   const products = this.productsService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const description = params.get("description")?.toLocaleLowerCase();
    

      if(description) {
         this.produtos = products.filter(product => product.description.toLocaleLowerCase().includes(description));
         return;
         
}
      this.produtos = products;
  });
  }

}
