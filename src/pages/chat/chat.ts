/** Represents a Component of Chat. */
/** Imports Modules */
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'chat',
  templateUrl: 'chat.html'
})
export class ChatComponent {
  // Define tabs variables
  chatTab: any;
  contactsTab: any;
  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
    // define component of specific tab content
    this.contactsTab = 'ChatContactsComponent';
    this.chatTab = 'ChatListComponent';
  }
}
