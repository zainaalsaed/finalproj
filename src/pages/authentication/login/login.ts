/** Represents a Component of login page. */

/** Imports Modules */
import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, MenuController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate'; // Translate Service


@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  // Define Veriables
  user = {};

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public translate: TranslateService,
    private menu: MenuController) {
    this.navCtrl = navCtrl;
    this.alertCtrl = alertCtrl;
    this.menu = menu;
    this.menu.enable(false); // Disable sidemenu
  }

  /** 
   * Forget Password
   * Open forget password alert box after click on forget password buttons
   * @input   email   Alert box contains one email input box and
   * translate  service used in placeholder
   * @button    Cancel
   * @button    Send
  */
  showForgetPasswordPopup() {
    let prompt = this.alertCtrl.create({
      title: this.translate.instant('FORGET_PASSWORD.TITLE'),
      message: this.translate.instant('FORGET_PASSWORD.SUBTITLE'),
      inputs: [{
        name: 'email',
        placeholder: this.translate.instant('FORGET_PASSWORD.EMAIL')
      },],
      buttons: [{
        text: this.translate.instant('FORGET_PASSWORD.CANCEL'),
        handler: data => {
          console.log('Cancel clicked');
        }
      }, {
        text: this.translate.instant('FORGET_PASSWORD.SEND'),
        handler: data => {
          console.log('Send clicked');
        }
      }]
    });
    prompt.present();
  }

  openPage(component) {
    this.navCtrl.setRoot(component);
  }
}
