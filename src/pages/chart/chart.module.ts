import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChartComponent } from './chart';

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    IonicPageModule.forChild(ChartComponent),
    TranslateModule
  ],
  exports: [
    ChartComponent,
    TranslateModule
  ]
})
export class ChartModule {}
