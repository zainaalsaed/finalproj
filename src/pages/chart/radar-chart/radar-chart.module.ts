import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RadarChartComponent } from './radar-chart';

@NgModule({
  declarations: [
    RadarChartComponent,
  ],
  imports: [
    IonicPageModule.forChild(RadarChartComponent),
    TranslateModule,
    ChartsModule
  ],
  exports: [
    RadarChartComponent,
    TranslateModule
  ]
})
export class RadarChartModule {}
