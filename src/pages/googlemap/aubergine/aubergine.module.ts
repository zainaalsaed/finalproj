import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { AubergineMapComponent } from './aubergine';

@NgModule({
  declarations: [
    AubergineMapComponent,
  ],
  imports: [
    IonicPageModule.forChild(AubergineMapComponent),
    TranslateModule
  ],
  exports: [
    AubergineMapComponent,
    TranslateModule
  ]
})
export class AubergineMapModule {}
