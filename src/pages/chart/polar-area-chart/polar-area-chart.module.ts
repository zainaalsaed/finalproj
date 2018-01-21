import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PolarAreaChartComponent } from './polar-area-chart';

@NgModule({
  declarations: [
    PolarAreaChartComponent,
  ],
  imports: [
    IonicPageModule.forChild(PolarAreaChartComponent),
    TranslateModule,
    ChartsModule
  ],
  exports: [
    PolarAreaChartComponent,
    TranslateModule
  ]
})
export class PolarAreaChartModule {}
