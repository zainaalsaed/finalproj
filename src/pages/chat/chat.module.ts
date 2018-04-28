import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChatComponent } from './chat';

@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    IonicPageModule.forChild(ChatComponent),
    TranslateModule
  ],
  exports: [
    ChatComponent,
    TranslateModule
  ]
})
export class ChatModule {}
