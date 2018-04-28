import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LatPage } from './lat';

@NgModule({
  declarations: [
    LatPage,
  ],
  imports: [
    IonicPageModule.forChild(LatPage),
  ],
})
export class LatPageModule {}
