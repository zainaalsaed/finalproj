import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart';


@NgModule({
  declarations: [
    DoughnutChartComponent,
  ],
  imports: [
    IonicPageModule.forChild(DoughnutChartComponent),
    TranslateModule,
    ChartsModule
  ],
  exports: [
    DoughnutChartComponent,
    TranslateModule
  ]
})
export class DoughnutChartModule {}
