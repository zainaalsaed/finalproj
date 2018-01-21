import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { AboutUsComponent } from './aboutus';

@NgModule({
  declarations: [
    AboutUsComponent,
  ],
  imports: [
    IonicPageModule.forChild(AboutUsComponent),
    TranslateModule
  ],
  exports: [
    AboutUsComponent,
    TranslateModule
  ]
})
export class AboutUsModule {}
