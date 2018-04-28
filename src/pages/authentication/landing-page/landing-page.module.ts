import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { LandingPageComponent } from './landing-page';

@NgModule({
  declarations: [
    LandingPageComponent,
  ],
  imports: [
    IonicPageModule.forChild(LandingPageComponent),
    TranslateModule
  ],
  exports: [
    LandingPageComponent,
    TranslateModule
  ]
})
export class LandingPageModule {}
