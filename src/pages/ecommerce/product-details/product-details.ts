/** Represents a Component of product details page. */
/** Imports Modules */
import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, ModalController, IonicPage } from 'ionic-angular';
// Model
import { ProductModel } from '../models/products.model';
import { CartModel } from '../models/cart.model';
// Service
import { ProductService } from '../services/products.service';

@IonicPage()
@Component({
  selector: 'product-details',
  templateUrl: 'product-details.html',
  providers: [ProductService]
})

export class ProductDetailsComponent implements OnInit {

  /** Define variables */
  public productId: any; // Product Id
  public categoryId: any; // Category Id
  thisProduct: ProductModel[]; // Products Model
  relatedProducts: ProductModel[] = [];
  cartProducts: CartModel[] = [];
  productDetails: Object;
  quantity: number;
  boxCartProducts = [];
  cartItems: any;
  obj = {
    productId: '',
    quantity: ''
  }
  retrievedData: any;

  constructor(public params: NavParams, public productService: ProductService,
    public navCtrl: NavController, public modalCtrl: ModalController) {}
  
  ngOnInit() {
    /** Get cart items from local storage and store it in 'cartProductsItems' */
    let cartProductsItems = JSON.parse(localStorage.getItem("cartProducts"));

    /** 
     * Check cart item exist or not
     * If cart item is exist then define the number of item in another variables
     * else define cart item number is zero 
    */
    if (cartProductsItems) {
      this.cartItems = cartProductsItems.length;
    } else {
      this.cartItems = 0;
    }

    /** Get product Idand category Id from url */
    this.productId = this.params.get("productId"); // Product Id
    this.categoryId = this.params.get("categoryId"); // category Id

    /** Define the product default caterory */
    this.quantity = 1; // Default Quantity
    
    // Get product details
    // Get all products from product service
    this.thisProduct = this.productService.getAllProducts();

    // Run the loop on this product array
    for (let i = 0; i < this.thisProduct.length; i++) {

      /**
       * Get current Product Details
       * Check if any product match with productId
       * then load this product details in another variable 'productDetails'
      */
      if (this.thisProduct[i].id === this.productId) {
        this.productDetails = this.thisProduct[i];
      }

      /**
       * Get related products Details
       * Check current product not match with list of all product and also
       * match selected product category with this current product
       * then push all this product details in another variable 'relatedProducts'
      */
      if (this.thisProduct[i].id !== this.productId && this.thisProduct[i].categoryId === this.categoryId) {
        this.relatedProducts.push(this.thisProduct[i]);
      }
    }
  }

  // Remove quantity
  minusQuantity() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }

  // Add quantity
  addQuantity() {
    this.quantity = this.quantity + 1;
  }

  // Goto related product details page
  gotoRelatedProductPage(productId) {
    this.navCtrl.push(ProductDetailsComponent, {
      productId: productId
    });
  }

  /**
   * Add to cart function
   * This function take two parameter - 1. productId 2.quantity
   * Load this values in another Object name as 'obj'
   * Retrive datas from local storage name as 'cartProducts'
   * Check local storage data
  */
  addToCart(productId, quantity) {

    // Create a new object by given parameter
    this.obj = {
      productId: productId,
      quantity: quantity
    }

    // Retrive datas from local storage
    this.retrievedData = JSON.parse(localStorage.getItem("cartProducts"));

    // Check data is empty or not
    /**
     * if the data is not null
     * Then load local storage all data in another variable name as 'boxCartProducts'
     * and current created object 'this.obj' add into this 'boxCartProducts'
     * else current object add in 'boxCartProducts'
     */
    if (this.retrievedData !== null) {
      this.boxCartProducts = this.retrievedData;
      this.boxCartProducts.push(this.obj);
      this.cartItems = this.boxCartProducts.length;
    } else {
      this.boxCartProducts.push(this.obj);
      this.cartItems = this.boxCartProducts.length;
    }

    // Finally new created array of object set in local storage
    localStorage.setItem("cartProducts", JSON.stringify(this.boxCartProducts));
    // retrieving our data and converting it back into an array
    this.retrievedData = localStorage.getItem("cartProducts");
  }

  openModal() {
    let modal = this.modalCtrl.create('CartProductsComponent');
    modal.present();
  }
}
