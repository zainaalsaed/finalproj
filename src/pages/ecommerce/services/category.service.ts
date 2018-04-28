/** Category Service */
import { Injectable } from '@angular/core';
@Injectable()
export class CategoryService {
  constructor() {}
  /** All Categories */
  getAllCategories() {
    return [{
      id: 1,
      name: 'Women',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c1.jpg'
    }, {
      id: 2,
      name: 'Men',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c2.jpg'
    }, {
      id: 3,
      name: 'Electronics',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c3.jpg'
    }, {
      id: 4,
      name: 'Home & Garden',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c4.jpg'
    }, {
      id: 5,
      name: 'Fashion',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c5.jpg'
    }, {
      id: 6,
      name: 'Toys & Baby',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c6.jpg'
    }, {
      id: 7,
      name: 'Book',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c7.jpg'
    }, {
      id: 8,
      name: 'Latest',
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/c8.jpg'
    }, ]
  }
}
