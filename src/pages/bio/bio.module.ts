import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { BioPage } from './bio';

@NgModule({
  declarations: [
    BioPage,
  ],
  imports: [
    IonicPageModule.forChild(BioPage),
  ],
})
export class BioPageModule {}
