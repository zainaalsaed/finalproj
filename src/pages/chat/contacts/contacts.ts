/** Represents a Component of Chat Contact List. */
/** Imports Modules */
import { Component, OnInit } from '@angular/core';
import { Contacts, Contact } from '@ionic-native/contacts';
import { ModalController, IonicPage } from 'ionic-angular';
/** Imports services */
import { LoaderService } from '../../../common/services/loader.service';


@IonicPage()
@Component({
  selector: 'chat-contacts',
  templateUrl: 'contacts.html',
  providers: [LoaderService]
})
export class ChatContactsComponent implements OnInit {
  public allContacts: Contact[];
  constructor(private loaderService: LoaderService, public modalCtrl:
    ModalController, private contacts: Contacts) {
    this.findContact('');
  }
  ngOnInit() {}
  /**
   * Function 'findContact()'
   *  This funtion find all the contacts
   *  Initially find only two params name as -
   *  displayName - Contact name
   *  phoneNumbers - Contacts phone number
  */
  public findContact(value: any) {
    // Loading start
    this.loaderService.presentLoading();
    let fn = value === undefined ? '' : value;
    this.contacts.find(['displayName', 'phoneNumbers'], {
      filter: fn,
      hasPhoneNumber: true
    }).then(data => {
      // After contact list loads successfully
      // Its loaded all the contact into the variable in 'allContacts'
      this.allContacts = data;
      // Loading off
      this.loaderService.hideLoading();
    });
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
