import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { GalleryComponent } from './gallery';

@NgModule({
  declarations: [
    GalleryComponent,
  ],
  imports: [
    IonicPageModule.forChild(GalleryComponent),
    TranslateModule
  ],
  exports: [
    GalleryComponent,
    TranslateModule
  ]
})
export class GalleryModule {}
