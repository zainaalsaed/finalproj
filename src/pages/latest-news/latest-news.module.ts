import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { LatestNewsComponent } from './latest-news';

@NgModule({
  declarations: [
    LatestNewsComponent,
  ],
  imports: [
    IonicPageModule.forChild(LatestNewsComponent),
    TranslateModule
  ],
  exports: [
    LatestNewsComponent,
    TranslateModule
  ]
})
export class LatestNewsModule {}
