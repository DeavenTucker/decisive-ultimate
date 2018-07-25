import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '../../node_modules/@ionic-native/status-bar';
import { SplashScreen } from '../../node_modules/@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FilterPipe} from './filter.pipe';


import { BioPage } from '../pages/bio/bio';
import { ExplorePage } from '../pages/explore/explore';
import { AfroPage} from '../pages/afro/afro';
import { TryOutPage } from '../pages/try-out/try-out';

import { Camera } from '@ionic-native/camera';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';


@NgModule({
  declarations: [
    MyApp,
    BioPage,
    HomePage,
    ExplorePage,
    TabsPage,
    FilterPipe,
    AfroPage,
    TryOutPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BioPage,
    HomePage,
    ExplorePage,
    TabsPage,
    AfroPage,
    TryOutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CameraPreview
  ]
})
export class AppModule { }
