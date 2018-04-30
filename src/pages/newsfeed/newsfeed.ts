import { Component, OnInit } from '@angular/core';
// Timeline Model
import { NavController, ToastController, IonicPage, MenuController } from 'ionic-angular';

import { TimelineModel } from '../profile/timeline/timeline.model';
// Timeline Service
import { TimelineService } from '../profile/timeline/timeline.service';

@IonicPage()
@Component({
  selector: 'newsfeed',
  templateUrl: 'newsfeed.html',
  providers: [TimelineService]
})

export class NewsFeedComponent implements OnInit {
  allPosts: TimelineModel[]; // Define timeline model
  constructor( public navCtrl: NavController,
    public toastCtrl: ToastController,
    public menu: MenuController , private newsFeedService: TimelineService) {}
  ngOnInit() {
    /** Loaded profile timeline data */
    this.allPosts = this.newsFeedService.getAllPosts();
  }
  /** Open status box */
  openStatusBox() {}
}
