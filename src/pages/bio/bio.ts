import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TryOutPage } from '../try-out/try-out'; 

/**
 * Generated class for the BioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bio',
  templateUrl: 'bio.html',
})
export class BioPage {
  public pics = [];
  public savedPics = [];
  public saved = false;
  public single = false;
  public double = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadPics();
    this.loadSavedPics();
  }

  ionViewDidLoad() {
    this.loadPics();
    this.loadSavedPics();
    console.log('ionViewDidLoad BioPage');
    console.log(this.double)
  }

  loadPics(){
    this.pics = [
      'assets/bio/1.png',
      'assets/bio/2.jpg',
      'assets/bio/3.png',
      'assets/bio/4.jpg',
      'assets/bio/5.png',
      'assets/bio/6.jpg',
    ]
  }

  goToHaircut() {
    console.log('button was clicked');
    this.navCtrl.push(TryOutPage);
  }

  loadSavedPics(){
    this.savedPics = [
      {
        url:'https://ath.unileverservices.com/wp-content/uploads/sites/4/2016/06/insta-llcooldrae.png',
        id: 'afro1'
      },
      {
        url:'assets/pics/placeholder.jpg',
        id: 'afro2'
      },
      {
        url:'assets/pics/placeholder.jpg',
        id: 'afro3'
      }
    ]
  }

  viewSingle(){
    this.double = false;
    this.saved = false;
    this.single = true;
  }

  viewDouble(){
    this.single = false;
    this.saved = false;
    this.double = true;
  }

  viewSavedPics(){
    this.single = false;
    this.double = false;
    this.saved = true;
  }

  viewCamera(id){
    this.navCtrl.push(TryOutPage, {id: id})
  }
}
