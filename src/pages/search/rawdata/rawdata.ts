/** Represents a Component of Raw data search. */

/** Imports Modules */
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'rawdata',
  templateUrl: 'rawdata.html'
})
export class RawDataComponent {
  searchQuery: string = '';
  items: string[];
  
  constructor() {
    this.initializeItems();
  }
  
  initializeItems() {
    /** Search data */
    this.items = ['Great Barrier Reef', 'Paris', 'Tokyo', 'Cusco', 'London',
      'Rome', 'New York City', 'Cape Town', 'Barcelona', 'Sydney',
      'Rio de Janeiro', 'Yellowstone', 'Amsterdam', 'Hong Kong',
      'Washington, D.C.'
    ];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}