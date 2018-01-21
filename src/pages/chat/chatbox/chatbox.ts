/** Represents a Component of Chat Box */
/** Imports Modules */
import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'chat-box',
  templateUrl: 'chatbox.html'
})

export class ChatBoxComponent {
  constructor(private viewCtrl: ViewController) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
