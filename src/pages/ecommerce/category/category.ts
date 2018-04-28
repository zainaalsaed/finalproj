/** Represents a Component of category page. */

/** Imports Modules */
import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
/** Import Models */
import { CategoryModel } from '../models/category.model';
/** Import Service */
import { CategoryService } from '../services/category.service';

@IonicPage()
@Component({
  selector: 'category',
  templateUrl: 'category.html',
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  allCategories: CategoryModel[];
  constructor(public navCtrl: NavController, private categoryService: CategoryService) {
    this.navCtrl = navCtrl;
  }
  ngOnInit() {
    /** 
     * Load all categories
     * Load all categories from the category service 
    */
    this.allCategories = this.categoryService.getAllCategories();
  }
  // Goto Products Page
  gotoProductsPage(categoryId) {
    this.navCtrl.push('ProductsComponent', {
      categoryId: categoryId
    });
  }
}
