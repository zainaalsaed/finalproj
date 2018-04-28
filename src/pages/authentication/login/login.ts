/** Represents a Component of login page. */

/** Imports Modules */
import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, MenuController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate'; // Translate Service
import firebase from 'firebase';
import { FirebaseError } from '@firebase/util';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { User } from '@firebase/auth-types';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController, Nav} from "ionic-angular";
import { ViewChild   } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page';
import { RegistrationComponent } from '../registration/registration';
import { NewsFeedComponent } from '../../newsfeed/newsfeed';
import { ProfileComponent } from '../../profile/profile';

@IonicPage()
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {
  
  loggedin= false;
  data={ };
  encodemyData:string;
encodedData:{};

  option:BarcodeScannerOptions ;
  // Define Veriables
  @ViewChild('username') user;
	@ViewChild('password') password;
  constructor(public navCtrl: NavController,
    public barcodeScanner:BarcodeScanner,
     private afAuth: AngularFireAuth,
     private alertCtrl: AlertController,
     private fire: AngularFireAuth,
     /*public nav: NavController*/
     public forgotCtrl: AlertController, 
     public menu: MenuController, 
     public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
     }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  /** 
   * Forget Password
   * Open forget password alert box after click on forget password buttons
   * @input   email   Alert box contains one email input box and
   * translate  service used in placeholder
   * @button    Cancel
   * @button    Send
  */
  

  
regEm(component) {

  this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
  .then( data => {
    console.log('got some data', this.fire.auth.currentUser);
    this.alert('Success! You\'re logged in');
    this.navCtrl.setRoot(component);
    this.loggedin=true;

    // user is logged in
  })
  .catch( error => {
    console.log('got an error', error);
    this.alert(error.message);
  })
  console.log('Would sign in with ', this.user.value, this.password.value);
  
}


forgotPass() {
  let forgot = this.forgotCtrl.create({
    title: 'Forgot Password?',
    message: "Enter you email address to send a reset link password.",
    inputs: [
      {
        name: 'email',
        placeholder: 'Email',
        type: 'email'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Send',
        handler: data => {
          console.log('Send clicked');
          let toast = this.toastCtrl.create({
            message: 'Email was sent successfully',
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
          });
          toast.present();
        }
      }
    ]
  });
  forgot.present();
}
signInWithFacebook() {
  this.afAuth.auth .signInWithPopup(new firebase.auth.FacebookAuthProvider()) .then(res => console.log(res));
this.loggedin=true;
}
signInWithgoogle() {
  this.afAuth.auth .signInWithPopup(new firebase.auth.GoogleAuthProvider()) .then(res => console.log(res));
  this.loggedin=true;

}
regUser(component) {
  this.navCtrl.setRoot(component);
}






goBk(){

  this.navCtrl.setRoot(LandingPageComponent);
this.navCtrl.popToRoot();
}

scan(component){

  this.option = {

    prompt: "Please scan your code"
  }
  this.barcodeScanner.scan(this.option).then((barcodeData) => {
    // Success! Barcode data is here
    console.log(barcodeData);
    this.data = barcodeData;
this.navCtrl.setRoot(component);
this.loggedin=true;


   }, (err) => {
       // An error occurred
       console.log(err);
   });

}


encodeData(){
this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,this.encodemyData).then((res)=>{
console.log(res)
this.encodedData = res;
}, (err) => {
// An error occurred
console.log(err);
})
}
openPagee(component) {
  console.log(component)
  this.navCtrl.setRoot(component);
}
}

