import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DynamicChartComponent } from './dynamic-chart';

@NgModule({
  declarations: [
    DynamicChartComponent,
  ],
  imports: [
    IonicPageModule.forChild(DynamicChartComponent),
    TranslateModule,
    ChartsModule
  ],
  exports: [
    DynamicChartComponent,
    TranslateModule
  ]
})
export class DynamicChartModule {}
