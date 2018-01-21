import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { FriendsComponent } from './friends';

@NgModule({
  declarations: [
    FriendsComponent,
  ],
  imports: [
    IonicPageModule.forChild(FriendsComponent),
    TranslateModule
  ],
  exports: [
    FriendsComponent,
    TranslateModule
  ]
})
export class FriendsModule {}
