import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { NewsFeedComponent } from './newsfeed';

@NgModule({
  declarations: [
    NewsFeedComponent,
  ],
  imports: [
    IonicPageModule.forChild(NewsFeedComponent),
    TranslateModule,
    IonicImageViewerModule
  ],
  exports: [
    NewsFeedComponent,
    TranslateModule
  ]
})
export class NewsFeedModule {}
