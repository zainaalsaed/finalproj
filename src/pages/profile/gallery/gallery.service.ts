import { Injectable } from '@angular/core';

@Injectable()

export class GalleryService {
  constructor() { }

  getAllPhotos() {
    return [
      { id: 1, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/1.jpg' },
      { id: 2, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/2.jpg' },
      { id: 3, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/3.jpg' },
      { id: 4, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/4.jpg' },
      { id: 5, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/5.jpg' },
      { id: 6, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/6.jpg' },
      { id: 7, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/7.jpg' },
      { id: 8, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/8.jpg' },
      { id: 9, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/9.jpg' },
      { id: 10, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/10.jpg' },
      { id: 11, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/11.jpg' },
      { id: 12, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/12.jpg' },
      { id: 13, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/13.jpg' },
      { id: 14, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/14.jpg' },
      { id: 15, image: 'https://s3-us-west-2.amazonaws.com/fulcrumy-ionic2/15.jpg' }
    ]
  }
}

