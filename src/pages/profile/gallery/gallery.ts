import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
// Models
import { GalleryModel } from './gallery.model';
// Services
import { GalleryService } from './gallery.service';

@IonicPage()
@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html',
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {
  images: GalleryModel[];
  constructor(public navCtrl: NavController,
    private galleryService: GalleryService,
    public alertCtrl: AlertController) {}
  ngOnInit() {
    //called after the constructor and called  after the first ngOnChanges()
    this.images = this.galleryService.getAllPhotos();
  }
}
