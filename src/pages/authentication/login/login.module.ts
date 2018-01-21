import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { LoginComponent } from './login';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    IonicPageModule.forChild(LoginComponent),
    TranslateModule
  ],
  exports: [
    LoginComponent,
    TranslateModule
  ]
})
export class LoginModule {}
