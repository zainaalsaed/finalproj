import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ComponentComponent } from './component';

@NgModule({
  declarations: [
    ComponentComponent,
  ],
  imports: [
    IonicPageModule.forChild(ComponentComponent),
    TranslateModule
  ],
  exports: [
    ComponentComponent,
    TranslateModule
  ]
})
export class ComponentModule {}
