import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BarChartComponent } from './bar-chart';


@NgModule({
  declarations: [
    BarChartComponent,
  ],
  imports: [
    IonicPageModule.forChild(BarChartComponent),
    TranslateModule,
    ChartsModule
  ],
  exports: [
    BarChartComponent,
    TranslateModule
  ]
})
export class BarChartModule {}
