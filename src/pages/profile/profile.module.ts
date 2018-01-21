import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ProfileComponent } from './profile';
import { TimelineComponent } from './timeline/timeline';
import { GalleryComponent } from './gallery/gallery'
import { FriendsComponent } from './friends/friends';
import { AboutmeComponent } from './aboutme/aboutme';

@NgModule({
  declarations: [
    ProfileComponent,TimelineComponent,
    GalleryComponent, FriendsComponent,
    AboutmeComponent
  ],
  imports: [
    IonicPageModule.forChild(ProfileComponent),
    TranslateModule,
    IonicImageViewerModule
  ],
  exports: [
    ProfileComponent,
    TimelineComponent,
    GalleryComponent,
    FriendsComponent,
    AboutmeComponent,
    TranslateModule
  ]
})
export class ProfileModule {}
