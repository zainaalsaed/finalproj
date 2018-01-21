import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { RegistrationComponent } from './registration';

@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationComponent),
    TranslateModule
  ],
  exports: [
    RegistrationComponent,
    TranslateModule
  ]
})
export class RegistrationModule {}
