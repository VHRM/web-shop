import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from 'src/app/app.facade';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  products: Product[];
  filteredData: Product[];
  minMaxPrice: [number, number];
  toggleFilter: boolean;

  constructor(private readonly facade: AppFacade, private readonly router: Router) {
    this.minMaxPrice = [Infinity, 0];
    this.toggleFilter = false;
    this.products = facade.getProducts();
    this.filteredData = this.products;
    
    this.products.forEach(product => {
      if (product.price < this.minMaxPrice[0])
        this.minMaxPrice[0] = product.price;
      if (product.price > this.minMaxPrice[1])
        this.minMaxPrice[1] = product.price;
    });
  }

  selectProduct(id: number) {
    this.router.navigate(["/details", id]);
  }

  filterHandler(options: any) {
    console.log(options);
    this.filteredData = this.products.filter(product => {
      return ((!options.nome || product.nome.includes(options.nome)) && (!options.priceMin || product.price >= options.priceMin) && (!options.priceMax || product.price <= options.priceMax));
    })
    this.filteredData.forEach(product => {
      if (product.price < this.minMaxPrice[0])
        this.minMaxPrice[0] = product.price;
      if (product.price > this.minMaxPrice[1])
        this.minMaxPrice[1] = product.price;
    });
  }

  itemSelected(id: number) {
    this.router.navigate(["/details", id]);
  }

  toggle() {
    this.toggleFilter = !this.toggleFilter;
  }
}
