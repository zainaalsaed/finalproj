import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { RawDataComponent } from './rawdata';

@NgModule({
  declarations: [
    RawDataComponent,
  ],
  imports: [
    IonicPageModule.forChild(RawDataComponent),
    TranslateModule
  ],
  exports: [
    RawDataComponent,
    TranslateModule
  ]
})
export class RawDataModule {}
