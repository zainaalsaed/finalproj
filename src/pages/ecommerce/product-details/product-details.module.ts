import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { ProductDetailsComponent } from './product-details';

@NgModule({
  declarations: [
    ProductDetailsComponent,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsComponent),
    TranslateModule,
    IonicImageViewerModule
  ],
  exports: [
    ProductDetailsComponent,
    TranslateModule
  ]
})
export class ProductDetailsModule {}
