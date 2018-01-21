/** Represents a Component of Components page. */

/** Import Modules */
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'component',
  templateUrl: 'component.html'
})

export class ComponentComponent {

  constructor(public navCtrl: NavController) {}

  /**
   * gotoTargetComponent(value)
   * This function works on click event
   * when user click any component its get the value of this specific event and
   * NavController set this component and will take user to that component
  */
  gotoTargetComponent(value) {
    if (value === 'Profile') { // When value is Profile
      this.navCtrl.setRoot('ProfileComponent');
    } else if (value === 'Calendar') { // When value is Calendar
      this.navCtrl.setRoot('FullCalendarComponent');
    } else if (value === 'Map') { // When value is Map
      this.navCtrl.setRoot('GoogleMapComponent');
    } else if (value === 'Chart') { // When value is Chart
      this.navCtrl.setRoot('ChartComponent');
    } else if (value === 'Ecommerce') { // When value is Ecommerce
      this.navCtrl.setRoot('CategoryComponent');
    } else if (value === 'NewsFeed') { // When value is News Feed
      this.navCtrl.setRoot('NewsFeedComponent');
    } else if (value === 'Chat') { // When value is Chat
      this.navCtrl.setRoot('ChatComponent');
    } else if (value === 'LatestNews') { // When value is Latest News
      this.navCtrl.setRoot('LatestNewsComponent');
    } else if (value === 'AboutUs') { // When value is About Us
      this.navCtrl.setRoot('AboutUsComponent');
    } else if (value === 'ContactUs') { // When value is Contact Us
      this.navCtrl.setRoot('ContactUsComponent');
    }
  }
}
