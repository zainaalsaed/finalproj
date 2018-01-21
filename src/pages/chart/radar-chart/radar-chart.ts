/** Represents a Component of Radar Charts. */

/** Imports Modules */
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'radar-chart',
  templateUrl: 'radar-chart.html'
})
export class RadarChartComponent {
  constructor() {}
    // Radar
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartData: any = [{ data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' }, { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }];
  public radarChartType: string = 'radar';
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }
}
