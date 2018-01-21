/** Represents a Component of cart. */
/** Imports Modules */
import { Component, OnInit } from '@angular/core';
import { NavParams, Platform, ViewController, IonicPage } from 'ionic-angular';
/** Imports models */
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/products.model';
/** Imports services */
import { ProductService } from '../services/products.service';

@IonicPage()
@Component({
  selector: 'cart',
  templateUrl: 'cart.html',
  providers: [ProductService]
})

export class CartProductsComponent implements OnInit {

  // Define variables
  retrievedData;
  products = [];
  cartProducts: CartModel[] = [];
  allProduct: ProductModel[] = [];
  totalPrice = 0;

  constructor(public platform: Platform, public params: NavParams, public viewCtrl:
    ViewController, public productService: ProductService) {}
  
  /** Page load function */
  ngOnInit() {
    /** Load all the products from product service */
    this.allProduct = this.productService.getAllProducts();
    /** Get all cart product from local storage */
    let cartData = localStorage.getItem("cartProducts");

    /** Check Cart Data items */
    if (cartData) {
      /** If cart data items not undefined then parse data in another variable */
      if (cartData.toString() !== 'undefined') {
        this.retrievedData = JSON.parse(cartData);
      } else {}
    }
    /** Load cart product function */
    this.cartProduct();
  }
  /** Cart product function */
  cartProduct() {
    /** 
     * Check retrieve data and run loop depend on this data
     * run another nested loop inside this loop depend on all products
     * Check all data product and retrieve data product id
     * if product id match then push all this product details into products variable
    */
    if (this.retrievedData) {
      for (let i = 0; i < this.retrievedData.length; i++) {
        for (let j = 0; j < this.allProduct.length; j++) {
          if (this.retrievedData[i].productId === this.allProduct[j].id) {
            this.products.push({ productInfo: this.allProduct[j], quantity: this
                .retrievedData[i].quantity });
            this.totalPrice = this.allProduct[j].price * this.retrievedData[i]
              .quantity + this.totalPrice;
          }
        }
      }
    }
  }
  /**
   * Remove product from cart items 
  */
  removeItem(productId, index, price) {
    this.retrievedData.splice(index, 1);
    this.products.splice(index, 1);
    localStorage.setItem("cartProducts", JSON.stringify(this.retrievedData));
    // Price calculate
    this.totalPrice = this.totalPrice - price;
  }
  /** Dismiss cart modal */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
