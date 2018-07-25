import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { ExplorePage } from './explore';

@NgModule({
  declarations: [
    ExplorePage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorePage),
  ],
})
export class ExplorePageModule {}
