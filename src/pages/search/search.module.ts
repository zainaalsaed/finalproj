import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { SearchComponent } from './search';
import { AutocompleteComponent } from './autocomplete/autocomplete';
import { RawDataComponent } from './rawdata/rawdata';

@NgModule({
  declarations: [
    SearchComponent,
    AutocompleteComponent,
    RawDataComponent
  ],
  imports: [
    IonicPageModule.forChild(SearchComponent),
    TranslateModule
  ],
  exports: [
    SearchComponent,
    TranslateModule,
    AutocompleteComponent,
    RawDataComponent
  ]
})
export class SearchModule {}
