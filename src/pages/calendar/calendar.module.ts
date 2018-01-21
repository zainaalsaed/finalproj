import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { CalendarComponent } from "ap-angular2-fullcalendar/src/calendar/calendar";
import { FullCalendarComponent } from './calendar';

@NgModule({
  declarations: [
    CalendarComponent,
    FullCalendarComponent
  ],
  imports: [
    IonicPageModule.forChild(FullCalendarComponent),
    TranslateModule
  ],
  exports: [
    FullCalendarComponent,
    TranslateModule
  ]
})
export class CalendarModule {}
