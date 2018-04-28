/** Represents a Component of AboutUs. */

/** Imports Modules */
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'aboutus',
  templateUrl: 'aboutus.html'
})
export class AboutUsComponent {
  segment: any;
  constructor() {
    this.segment = 'design';
  }
}
