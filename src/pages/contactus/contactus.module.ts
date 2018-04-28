import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ContactUsComponent } from './contactus';

@NgModule({
  declarations: [
    ContactUsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ContactUsComponent),
    TranslateModule
  ],
  exports: [
    ContactUsComponent,
    TranslateModule
  ]
})
export class ContactUsModule {}
