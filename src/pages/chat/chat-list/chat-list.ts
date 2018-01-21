/** Represents a Component of Chat List. */
/** Imports Modules */

import { Component } from '@angular/core';
import { ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'chat-list',
  templateUrl: 'chat-list.html'
})

export class ChatListComponent {
  constructor(public modalCtrl: ModalController) {
  }
  /** 
    * This function works when user click on any contact item box
    * Its open a modal window of chat box
  */
  gotoChatBox() {
    let modal = this.modalCtrl.create('ChatBoxComponent');
    modal.present();
  }
}
