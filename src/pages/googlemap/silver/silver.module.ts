import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SilverMapComponent } from './silver';

@NgModule({
  declarations: [
    SilverMapComponent,
  ],
  imports: [
    IonicPageModule.forChild(SilverMapComponent),
    TranslateModule
  ],
  exports: [
    SilverMapComponent,
    TranslateModule
  ]
})
export class SilverMapModule {}
