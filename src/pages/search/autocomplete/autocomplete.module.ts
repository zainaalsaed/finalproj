import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { AutocompleteComponent } from './autocomplete';

@NgModule({
  declarations: [
    AutocompleteComponent,
  ],
  imports: [
    IonicPageModule.forChild(AutocompleteComponent),
    TranslateModule
  ],
  exports: [
    AutocompleteComponent,
    TranslateModule
  ]
})
export class AutocompleteModule {}
