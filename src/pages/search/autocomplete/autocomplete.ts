/** Represents a Component of autocomplete search. */

/** Imports Modules */
import {Component, NgZone} from '@angular/core';
import { IonicPage } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'autocomplete',
  templateUrl: 'autocomplete.html'
})

export class AutocompleteComponent {
  autocompleteItems;
  autocomplete;

  // Define google autocomplete service
  service = new google.maps.places.AutocompleteService();

  constructor (private zone: NgZone) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  /** Selected item set into the input field */
  chooseItem(item) {
    this.autocomplete.query = item;
  }

  /** This function search of user input */
  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    
    this.service.getPlacePredictions({ input: this.autocomplete.query }, function (predictions, status) {
      me.autocompleteItems = []; 
      me.zone.run(function () {
        predictions.forEach(function (prediction) {
          // Push all search items into the array of 'autocompleteItems'
          me.autocompleteItems.push(prediction.description);
        });
      });
    });
  }
}