/** Represents a Component of Search. */

/** Imports Modules */
import { Component } from '@angular/core';
import { AlertController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchComponent {

  searchOptionOpen: boolean;
  searchOption;
  constructor(public alertCtrl: AlertController) {
    this.searchOption = 'rawData';
  }

  /**
   * change search option function
   * This function open a alert box that contain the option of search
   * There is two types of search option -
   * 1. Search from user raw data this data holds array container
   * 2. Search of google autocomplete
   * when choose one option from this list then its change the search option
  */
  changeSearchOption() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Search Options');

    alert.addInput({
      type: 'radio',
      label: 'Raw Data',
      value: 'rawData',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Autocomplete',
      value: 'autocomplete'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.searchOptionOpen = false;
        this.searchOption = data;
      }
    });

    alert.present().then(() => {
      this.searchOptionOpen = true;
    });
  }

}