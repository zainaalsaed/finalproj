import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { Contacts } from '@ionic-native/contacts';
import { ChatContactsComponent } from './contacts';

@NgModule({
  declarations: [
    ChatContactsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatContactsComponent),
    TranslateModule
  ],
  exports: [
    ChatContactsComponent,
    TranslateModule
  ],
  providers: [
    Contacts
  ]
})
export class ChatContactsModule {}
