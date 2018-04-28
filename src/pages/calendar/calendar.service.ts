/** Calendar Service */
import { Injectable } from '@angular/core';

@Injectable()

export class CalendarService {
  constructor() {}
  
  getAllEvents() {
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();
    return [{
      title: 'All Day Event',
      start: new Date(y, m, 1).toISOString()
    }, {
      title: 'Long Event',
      start: new Date(y, m, d - 5).toISOString(),
      end: new Date(y, m, d - 2).toISOString()
    }, {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d - 3, 16, 0).toISOString(),
      allDay: false
    }, {
      id: 999,
      title: 'Repeating Event',
      start: new Date(y, m, d + 4, 16, 0).toISOString(),
      allDay: false
    }, {
      title: 'Meeting',
      start: new Date(y, m, d, 10, 30).toISOString(),
      allDay: false
    }, {
      title: 'Lunch',
      start: new Date(y, m, d, 12, 5).toISOString(),
      end: new Date(y, m, d, 14, 43).toISOString(),
      allDay: false
    }, {
      title: 'Birthday Party',
      start: new Date(y, m, d + 1, 19, 0).toISOString(),
      end: new Date(y, m, d + 1, 22, 30).toISOString(),
      allDay: false
    }, {
      title: 'Click for Google',
      start: new Date(y, m, 28).toISOString(),
      end: new Date(y, m, 29).toISOString(),
      url: 'http://google.com/'
    }]
  }
}
