import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
// Models
import { FriendsModel } from './friends.model';
// Services
import { FriendsService } from './friends.service';

@IonicPage()
@Component({
  selector: 'friends',
  templateUrl: 'friends.html',
  providers: [FriendsService]
})
export class FriendsComponent {
  friends: FriendsModel[];
  constructor(public navCtrl: NavController, private friendsService: FriendsService ) {}
  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges()
    this.friends = this.friendsService.getAllFriends();
  }
}
