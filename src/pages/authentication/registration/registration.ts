/** Represents a Component of registration page. */

/** Imports Modules */
import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'registration',
  templateUrl: 'registration.html'
})
export class RegistrationComponent {
  
  // Define Veriables
  user = {};

  constructor(public navCtrl: NavController, private menu: MenuController) {
    this.navCtrl = navCtrl;
    this.menu.enable(false); // Disable sidemenu
  }
  
  /**
   * Submit function of registration form
   * This function will take user to profile page
  */
  RegistrationForm() {
    this.navCtrl.setRoot('ProfileComponent');
  }
  
  /**
   * Skip function
   * This function will take user to landing page
  */
  skip() {
    this.navCtrl.setRoot('LandingPageComponent');
  }
}
