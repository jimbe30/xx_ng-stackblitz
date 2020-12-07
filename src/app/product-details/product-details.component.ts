import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    window.alert("Your product has been added to the cart!");
  }
}
