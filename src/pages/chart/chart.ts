/** Represents a Component of Charts. */

/** Imports Modules */
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import 'chart.js/src/chart.js'; // import ChartJs


@IonicPage()
@Component({
  selector: 'chart',
  templateUrl: 'chart.html'
})
export class ChartComponent {

  /** Define Tabs Variable */
  barChart: string;
  doughnutChart: string;
  pieChart: string;
  polarArea: string;
  dynamic: string;
  radar: string;

  constructor() {
    /**
     * Tab represents component 
    */
    this.barChart = 'BarChartComponent';
    this.doughnutChart = 'DoughnutChartComponent';
    this.pieChart = 'PieChartComponent';
    this.polarArea = 'PolarAreaChartComponent';
    this.dynamic = 'DynamicChartComponent';
    this.radar = 'RadarChartComponent';
  }
}
