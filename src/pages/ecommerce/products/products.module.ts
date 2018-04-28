import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { ProductsComponent } from './products';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ProductsComponent),
    TranslateModule
  ],
  exports: [
    ProductsComponent,
    TranslateModule
  ]
})
export class ProductsModule {}
