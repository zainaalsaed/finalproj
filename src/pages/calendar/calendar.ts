/** Represents a Component of calendar page. */

/** Imports Modules */
import { Component, AfterViewInit } from '@angular/core';
import { AlertController, IonicPage } from 'ionic-angular';

/** Imports calendar service */
import { CalendarService } from './calendar.service';

@IonicPage()
@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html',
  providers: [CalendarService]
})

export class FullCalendarComponent implements AfterViewInit {

  /** Define Veriables */
  allEvents: any[];
  segment: any;
  calendarOptions: Object;

  constructor(private calendarService: CalendarService,
    public alertCtrl: AlertController) {
    this.alertCtrl = alertCtrl;

    /** Load all calendar events */
    this.allEvents = this.calendarService.getAllEvents();

    /** Default segment of calendar */
    this.segment = "calendarView";
  }

  ngAfterViewInit() {

    /** Define Calendar Options  */
    this.calendarOptions = {
      fixedWeekCount: false,
      editable: true,
      height: 450,
      aspectRatio: 2,
      displayEventTime: false,
      eventColor: '#f83600',
      header: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },
      footer: {
        center: 'month,basicWeek,basicDay,list',
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day',
        list: 'List'
      },
      eventLimit: true, // allow "more" link when too many events
      events: this.allEvents,
      dayClick: function () {
        this.css('background-color', '#f9d423');
      }
    };
  }

  /**
   * Add new event function
   * This function open a alert box controller
   * The alert box controller contains three inputs
   * @input   title   Title of the event
   * @input   date    Start Date of the event
   * @input   date    End Date of the event
   * @button  Cancel
   * @button  Save
  */
  addNewEvent() {
    let prompt = this.alertCtrl.create({
      title: 'New Event',
      inputs: [{
        name: 'title',
        placeholder: 'Title',
        type: 'text',
        id: 'title'
      }, {
        name: 'start',
        placeholder: 'Start Date',
        type: 'date'
      }, {
        name: 'end',
        placeholder: 'End Date',
        type: 'date'
      },],
      buttons: [{
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'Save',
        handler: data => {
          this.allEvents.push(data);
        }
      }]
    });
    prompt.present();
  }
}
