/** Represents a Component of settings page. */
/** Imports Modules */
import { Component } from '@angular/core';
import { Platform, IonicPage } from 'ionic-angular';
/** Settings page service */
import { SettingsService } from './settings.service';
// Translate Service
import { TranslateService } from 'ng2-translate';

@IonicPage()
@Component({
  selector: 'settings',
  templateUrl: 'settings.html',
  providers: [SettingsService]
})

export class SettingsComponent {
  // Define variables
  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60 };
  text: number = 0;
  languages: any;

  constructor(private settingsService: SettingsService, public translate:
    TranslateService, public platform: Platform) {
      /** Get all languages from setting service */
      this.settingsService.getLanguages().subscribe(languages => this.languages =
        languages.LANGUAGES, error => console.error('Error: ' + error), () =>
        console.log('Completed!'));
    }
  /**
   * Language change function
   * This function works on click and take one parameter of language code
   * when language code 'ar' the platform direction will be 'rtl'
   * otherwise platform direction 'ltr' 
  */
  changeLanguage(languageId) {
    if (languageId === 'ar') {
      this.platform.setDir('rtl', true);
      this.translate.setDefaultLang(languageId);
    } else {
      this.platform.setDir('ltr', true);
      this.translate.setDefaultLang(languageId);
    }
  }
}
