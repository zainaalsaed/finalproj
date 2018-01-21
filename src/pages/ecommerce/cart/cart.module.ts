import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { CartProductsComponent } from './cart';

@NgModule({
  declarations: [
    CartProductsComponent,
  ],
  imports: [
    IonicPageModule.forChild(CartProductsComponent),
    TranslateModule
  ],
  exports: [
    CartProductsComponent,
    TranslateModule
  ]
})
export class CartModule {}
