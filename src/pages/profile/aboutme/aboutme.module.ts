import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { AboutmeComponent } from './aboutme';

@NgModule({
  declarations: [
    AboutmeComponent,
  ],
  imports: [
    IonicPageModule.forChild(AboutmeComponent),
    TranslateModule
  ],
  exports: [
    AboutmeComponent,
    TranslateModule
  ]
})
export class AboutmeModule {}
