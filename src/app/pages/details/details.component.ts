import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppFacade } from 'src/app/app.facade';
import { Product } from 'src/app/types/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  id: string;
  product: Product;

  constructor(private readonly facade: AppFacade, private readonly router: Router, private readonly route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id") as string;
    this.product = facade.getDetails(this.id);
    
    if (!this.product) {
      this.redirectBack();
    }
  }

  setUpPayment() {
    // this.facade.setUpPayment(this.id);
    Swal.fire({
      title: "Parabéns!!!",
      text: "Você comprou " + this.product.nome,
      icon: "success"
    })
  }

  redirectBack() {
    this.router.navigate(["/home"]);
  }
}
