import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { TimelineComponent } from './timeline';

@NgModule({
  declarations: [
    TimelineComponent,
  ],
  imports: [
    IonicPageModule.forChild(TimelineComponent),
    TranslateModule
  ],
  exports: [
    TimelineComponent,
    TranslateModule
  ]
})
export class TimelineModule { }
