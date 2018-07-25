import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the TryOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-try-out',
  templateUrl: 'try-out.html',
})
export class TryOutPage {
  public picture;
  page2 = TabsPage;
  public images = [
    {
      id: 'afro',
      url: '../../assets/ready/afro-x.png'
    },
    {
      id: 'cool',
      url: '../../assets/ready/cool-x.png'
    },
    {
      id: 'fade',
      url: '../../assets/ready/fade-x.png'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public cameraPreview: CameraPreview) {
    this.platform.ready().then(() => {
      // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
      const cameraPreviewOpts: CameraPreviewOptions = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'front',
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
        alpha: 1
      };
      //this.cameraPreview.setOnPictureTakenHandler().subscribe((result) => {
        //console.log(result);
        // do something with the result
      //});
      // start camera
      this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log('camera start')
        },
        (err) => {
          console.log(err)
        });
    }
    )}




  ionViewDidLoad() {
    console.log('ionViewDidLoad TryOutPage');
  }

  ionViewDidLeave() {
    console.log('camera stopped');
    this.cameraPreview.stopCamera();
  }
  logEvent(e) {
    console.log('will take picture');
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    }

    // take a picture
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });
  }
}