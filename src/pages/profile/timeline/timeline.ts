import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
// Models
import { TimelineModel } from './timeline.model';
// Services
import { TimelineService } from './timeline.service';

@IonicPage()
@Component({
  selector: 'timeline',
  templateUrl: 'timeline.html',
  providers: [TimelineService]
})
export class TimelineComponent implements OnInit {
  allPosts: TimelineModel[];
  constructor(public navCtrl: NavController, private newsFeedService: TimelineService) { }
  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges()
    // Load all post of newsfeed
    this.allPosts = this.newsFeedService.getAllPosts();
  }
}
