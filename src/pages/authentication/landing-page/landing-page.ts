/** Represents a Component of landing page. */

/** Imports Modules */
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.html'
})
export class LandingPageComponent {
  constructor(public navCtrl: NavController,
    private menu: MenuController) {
    this.menu.enable(false); // Disable sidemenu
  }

  openPage(component) {
    console.log(component)
    this.navCtrl.setRoot(component);
  }
}
