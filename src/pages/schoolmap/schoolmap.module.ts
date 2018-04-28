import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolmapPage } from './schoolmap';

@NgModule({
  declarations: [
    SchoolmapPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolmapPage),
  ],
})
export class SchoolmapPageModule {}
