import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { NightMapComponent } from './night';

@NgModule({
  declarations: [
    NightMapComponent,
  ],
  imports: [
    IonicPageModule.forChild(NightMapComponent),
    TranslateModule
  ],
  exports: [
    NightMapComponent,
    TranslateModule
  ]
})
export class NightMapModule {}
