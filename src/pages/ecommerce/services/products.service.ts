/** Product Service */

import { Injectable } from '@angular/core';
@Injectable()
export class ProductService {
  constructor() {}

  /** All the products data store in this function name as 'getAllProducts' */
  getAllProducts() {
    return [{
      id: 1,
      name: 'Adrianna Papell',
      description: 'Adrianna Papell Womens Pleated Jersey Sheath Dress',
      categoryId: 1,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p1.jpg',
      price: 160,
      availability: 'Sell'
    }, {
      id: 2,
      name: 'Calvin Klein',
      description: 'Calvin Klein Womens Tweed Jacquard Sheath',
      categoryId: 1,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p2.jpg',
      price: 129.50,
      availability: 'Available'
    }, {
      id: 3,
      name: 'Alexis Bittar',
      description: 'Alexis Bittar Crystal Encrusted Oversize Link Cuff',
      categoryId: 1,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p3.jpg',
      price: 225.00,
      availability: 'Sell'
    }, {
      id: 4,
      name: 'Kendra Scott',
      description: 'Kendra Scott Harlow Necklace',
      categoryId: 1,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p4.jpg',
      price: 225.00,
      availability: 'Available'
    }, {
      id: 5,
      name: 'NIXON',
      description: 'Nixon Womens Arrow Leather Quartz Stainless Steel Casual Watch, Color:Brown',
      categoryId: 1,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p5.jpg',
      price: 150,
      availability: 'Available'
    }, {
      id: 6,
      name: 'PUMA',
      description: 'Puma Mens Archive Life Short-Sleeve Shirt - Light Gray Heather',
      categoryId: 2,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p6.jpg',
      price: 150,
      availability: 'Available'
    }, {
      id: 7,
      name: 'J.Lindeberg',
      description: 'J.Lindeberg Mens M Hunter Reg 3.0 Tx Jersey',
      categoryId: 2,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p7.jpg',
      price: 150,
      availability: 'Available'
    }, {
      id: 8,
      name: 'Jersey',
      description: 'J.Lindeberg Mens M Tour Tech Reg Tx Jersey',
      categoryId: 2,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p8.jpg',
      price: 150,
      availability: 'Available'
    }, {
      id: 9,
      name: 'Lindeberg',
      description: 'J.Lindeberg Mens M Dennis Reg Tx Jersey',
      categoryId: 2,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p9.jpg',
      price: 200,
      availability: 'Available'
    }, {
      id: 10,
      name: 'Apple MacBook Pro',
      description: 'Apple MacBook Pro MNQF2LL/A 13-inch Laptop with Touch Bar (2.9GHz dual-core Intel Core i5, 512GB Retina Display), Space Gray',
      categoryId: 3,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p10.jpg',
      price: 1899.99,
      availability: 'Available'
    }, {
      id: 11,
      name: 'Coaster Home Furnishings',
      description: 'Coaster 800336 Home Furnishings Bookcase, Light Brown',
      categoryId: 4,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p11.jpg',
      price: 107.55,
      availability: 'Available'
    }, {
      id: 12,
      name: 'Paul Green',
      description: 'Paul Green Womens Lonnie Heel Dress Sandal',
      categoryId: 5,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p12.jpg',
      price: 235.55,
      availability: 'Available'
    }, {
      id: 13,
      name: 'CL by Chinese Laundry',
      description: 'CL by Chinese Laundry Womens Ada Patent Dress Pump',
      categoryId: 5,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p13.jpg',
      price: 250.55,
      availability: 'Available'
    }, {
      id: 14,
      name: 'Click N Play',
      description: 'Click N Play Pretend Play Cosmetic and Makeup Set with Floral Tote Bag',
      categoryId: 6,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/81E8TUoTmCL._SL1500_.jpg',
      price: 12.55,
      availability: 'Available'
    }, {
      id: 15,
      name: 'Shopkins',
      description: 'Shopkins Shoppies S2 W2 Dolls Rainbow Kate',
      categoryId: 6,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/81en9gCbDyL._SL1500_.jpg',
      price: 12.55,
      availability: 'Available'
    }, {
      id: 16,
      name: 'Silence Series',
      description: 'Forsaken Skies (Silence) Paperback – September 6, 2016',
      categoryId: 7,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p14.jpg',
      price: 14.55,
      availability: 'Available'
    }, {
      id: 17,
      name: 'The Corporation Wars',
      description: 'Sentient machines work, fight and die in interstellar exploration and conflict for the benefit of their owners - the competing mining corporations of Earth. But sent over hundreds of light-years, commands are late to arrive and often hard to enforce. The machines must make their own decisions, and make them stick.',
      categoryId: 7,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p15.jpg',
      price: 12.55,
      availability: 'Available'
    }, {
      id: 18,
      name: 'PUMA',
      description: 'Puma Mens Archive Life Short-Sleeve Shirt - Light Gray Heather',
      categoryId: 8,
      image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/ecommerce/p6.jpg',
      price: 150,
      availability: 'Available'
    }]
  }
}
