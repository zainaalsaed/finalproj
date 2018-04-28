/** Represents a Component of landing page. */
import { Platform, IonicPage } from 'ionic-angular';

/** Imports Modules */
import { Component } from '@angular/core';
import { NavController,  MenuController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { SettingsService } from '../../settings/settings.service';

@IonicPage()
@Component({
  selector: 'landing-page',
  templateUrl: 'landing-page.html',
  providers: [SettingsService]
})
export class LandingPageComponent {
  
  constructor( public translate:
    TranslateService, public navCtrl: NavController,
    private menu: MenuController) {
    this.menu.enable(false); // Disable sidemenu
  }

  openPage(component) {
    console.log(component)
    this.navCtrl.setRoot(component);
  }
  public changeLanguage(language){
    this.translate.use(language);
  }

  
}
