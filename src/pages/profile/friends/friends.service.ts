import { Injectable } from '@angular/core';

@Injectable()

export class FriendsService {
  constructor() { }

  getAllFriends() {
    return [
      { id: 1, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/16.jpg', name: 'Jennifer Katharine' },
      { id: 2, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/17.jpeg', name: 'Mark Zuckerberg' },
      { id: 3, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/18.jpeg', name: 'Bill Gates' },
      { id: 4, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/4.jpg', name: 'John Papa' },
      { id: 5, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/5.jpg', name: 'Brandy Carney' },
      { id: 6, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/6.jpg', name: 'Adam Bradley' },
      { id: 7, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/7.jpg', name: 'Max Lynch' },
      { id: 8, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/8.jpg', name: 'Tim Lancina' }
    ]
  }
}

