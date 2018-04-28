import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PieChartComponent } from './pie-chart';

@NgModule({
  declarations: [
    PieChartComponent,
  ],
  imports: [
    IonicPageModule.forChild(PieChartComponent),
    TranslateModule,
    ChartsModule
  ],
  exports: [
    PieChartComponent,
    TranslateModule
  ]
})
export class PieChartModule {}
