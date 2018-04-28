import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChatBoxComponent } from './chatbox';

@NgModule({
  declarations: [
    ChatBoxComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatBoxComponent),
    TranslateModule
  ],
  exports: [
    ChatBoxComponent,
    TranslateModule
  ]
})
export class ChatBoxModule {}
