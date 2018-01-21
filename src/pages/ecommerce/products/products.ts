/** Represents a Component of product page. */
/** Imports Modules */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ModalController, IonicPage } from 'ionic-angular';
/** Products Model */
import { ProductModel } from '../models/products.model';
/** Products Service */
import { ProductService } from '../services/products.service';


@IonicPage()
@Component({
  selector: 'products',
  templateUrl: 'products.html',
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  @ViewChild(Slides) slides: Slides;
  public categoryId: any; // Category Id
  allProducts: ProductModel[]; // Products Model
  cartItems: any;
  cartProductsItems: any;

  constructor(public navCtrl: NavController, public params: NavParams, public productService:
    ProductService, public modalCtrl: ModalController) {
      // Get category Id from nav params
      this.categoryId = params.get("categoryId");
      // get All cart items from localStorage
      this.cartProductsItems = JSON.parse(localStorage.getItem("cartProducts"));
      // check that cart items exist or not
      // If exist added all the items in another variable at cart items
      // else cart items get zero
      if (this.cartProductsItems) {
        this.cartItems = this.cartProductsItems.length;
      } else {
        this.cartItems = 0;
      }
  }

  ngOnInit() {
    /** 
     * Load all products
     * Load all products from the products service 
    */
    this.allProducts = this.productService.getAllProducts();
  }

  /** Goto Product details page */
  productDetails(productId, categoryId) {
    this.navCtrl.push('ProductDetailsComponent', {
      productId: productId, categoryId: categoryId
    });
  }
  // Open cart modal
  openModal() {
    let modal = this.modalCtrl.create('CartProductsComponent');
    modal.present();
  }
}
