import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TryOutPage } from './try-out';

@NgModule({
  declarations: [
    TryOutPage,
  ],
  imports: [
    IonicPageModule.forChild(TryOutPage),
  ],
})
export class TryOutPageModule {}
