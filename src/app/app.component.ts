/** Imports Modules */
import { Component, ViewChild } from '@angular/core';
import { Platform, Config, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from 'ng2-translate';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  /** Main root page */
  rootPage: string = 'LandingPageComponent';

  /**
   * Define default page object variables
   * Dafault variable are -
   * @title       string      Side menu item title
   * @component   any         Any page component
   * @leftIcon    string      Menu item icon name
  */
  pages: Array < { title: string, component: any, leftIcon: string } > ;

  constructor(public platform: Platform, private config: Config, statusBar: StatusBar,
    splashScreen: SplashScreen, public translate: TranslateService) {
      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();
        splashScreen.hide();
        this.config.set('ios', 'backButtonText', '');
      });

      // Set default translate language
      // Default language english
      // Language code 'en'
      translate.setDefaultLang('en');

      // Page navigation component
      this.pages = [
        { title: this.translate.instant('MENU_ITEMS.PROFILE'), component: 'ProfileComponent', leftIcon: 'person' },
        { title: this.translate.instant('MENU_ITEMS.CALENDAR'), component: 'FullCalendarComponent', leftIcon: 'calendar' },
        { title: this.translate.instant('MENU_ITEMS.GOOGLEMAP'), component: 'GoogleMapComponent', leftIcon: 'md-pin' },
        { title: this.translate.instant('MENU_ITEMS.CHART'), component: 'ChartComponent', leftIcon: 'stats' },
        { title: this.translate.instant('MENU_ITEMS.ECOMMERCE'), component: 'CategoryComponent', leftIcon: 'cart' },
        { title: this.translate.instant('MENU_ITEMS.LATESTNEWS'), component: 'LatestNewsComponent', leftIcon: 'paper-plane' },
        { title: this.translate.instant('MENU_ITEMS.NEWSFEED'), component: 'NewsFeedComponent', leftIcon: 'paper' },
        { title: this.translate.instant('MENU_ITEMS.CHAT'), component: 'ChatComponent', leftIcon: 'chatbubbles' },
        { title: this.translate.instant('MENU_ITEMS.COMOPNENT'), component: 'ComponentComponent', leftIcon: 'keypad' },
        { title: this.translate.instant('MENU_ITEMS.ABOUTUS'), component: 'AboutUsComponent', leftIcon: 'information-circle' },
        { title: this.translate.instant('MENU_ITEMS.CONTACTUS'), component: 'ContactUsComponent', leftIcon: 'mail' },
        { title: this.translate.instant('MENU_ITEMS.SETTINGS'), component: 'SettingsComponent', leftIcon: 'settings' },
        { title: this.translate.instant('MENU_ITEMS.SEARCH'), component: 'SearchComponent', leftIcon: 'search' },
        { title: this.translate.instant('MENU_ITEMS.LOGOUT'), component: 'LandingPageComponent', leftIcon: 'md-log-out' }
      ];
    }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}