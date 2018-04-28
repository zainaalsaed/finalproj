import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree } from '@ionic-native/admob-free';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { MyApp } from './app.component';
import { AdmobFreeProvider } from '../providers/admob-free/admob-free';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {IonicPageModule} from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseAuth = {
  apiKey: "AIzaSyDaMitUUxNTOo7uWpsRuhDtl4ox7cvR1FA",
  authDomain: "test-project-ca0ec.firebaseapp.com",
  databaseURL: "https://test-project-ca0ec.firebaseio.com",
  projectId: "test-project-ca0ec",
  storageBucket: "",
  messagingSenderId: "778431294120"
  
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      menuType: 'overlay',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    }),
    IonicImageViewerModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AdMobFree,
    Geolocation,
    BarcodeScanner,
    AdmobFreeProvider
  ]
})
export class AppModule { }
