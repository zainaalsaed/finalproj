import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { DarkMapComponent } from './dark';

@NgModule({
  declarations: [
    DarkMapComponent,
  ],
  imports: [
    IonicPageModule.forChild(DarkMapComponent),
    TranslateModule
  ],
  exports: [
    DarkMapComponent,
    TranslateModule
  ]
})
export class DarkMapModule {}
