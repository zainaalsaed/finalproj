/** Represents a Component of Google Map. */

/** Imports Modules */
import { Component, OnInit } from '@angular/core';
import { ToastController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'google-map',
  templateUrl: 'googlemap.html'
})

export class GoogleMapComponent implements OnInit {

  /** Define Tabs Variable */
  StandardMap: any;
  SilverMap: any;
  NightMap: any;
  DarkMap: any;
  AubergineMap: any;

  constructor(public toastCtrl: ToastController) {
    /**
     * Tab represents component 
    */
    this.toastCtrl = toastCtrl;
    this.StandardMap = 'StandardMapComponent';
    this.SilverMap = 'SilverMapComponent';
    this.NightMap = 'NightMapComponent';
    this.DarkMap = 'DarkMapComponent';
    this.AubergineMap = 'AubergineMapComponent';
  }
  ngOnInit() {
    this.presentToast();
  }
  /** Toast - create welcome message when page load */
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Welcome to Google Map.',
      duration: 3000
    });
    toast.present();
  }
}
