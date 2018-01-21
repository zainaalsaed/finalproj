import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit {
  segment: any;
  // Constructor
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public menu: MenuController) {
    this.segment = "timeline"; // Default icon for segment
    this.menu.enable(true); // Enable sidemenu
  }

  // Toast
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Welcome to your profile.',
      duration: 3000
    });
    toast.present();
  }

  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges() 
    //  Called toast
    this.presentToast();
  }

  // Goto Search Component
  gotoSearch() {
    this.navCtrl.push('SearchComponent');
  }
}
