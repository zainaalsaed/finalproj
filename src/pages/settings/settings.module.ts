import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SettingsComponent } from './settings';

@NgModule({
  declarations: [
    SettingsComponent,
  ],
  imports: [
    IonicPageModule.forChild(SettingsComponent),
    TranslateModule
  ],
  exports: [
    SettingsComponent,
    TranslateModule
  ]
})
export class SettingsModule {}
