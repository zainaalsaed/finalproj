import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChatListComponent } from './chat-list';

@NgModule({
  declarations: [
    ChatListComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatListComponent),
    TranslateModule
  ],
  exports: [
    ChatListComponent,
    TranslateModule
  ]
})
export class ChatListModule {}
