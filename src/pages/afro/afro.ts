import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TryOutPage } from '../try-out/try-out';

@IonicPage()
@Component({
  selector: 'page-afro',
  templateUrl: 'afro.html',
})
export class AfroPage {
  page3 = TryOutPage;
  public id;
  public currentItem;
  public items = [
    { picture: '../../assets/imgs/afro.png', id: 'afro', barber: 'Buzz Barber', cell: "(213) 513-8040", likes: "10" },
    { picture: '../../assets/imgs/download-1.png', id: 'buzz-Cut', barber: 'Buzz Barber', cell: "(213) 513-8040", likes: "10" },
    { picture: '../../assets/imgs/curlyfh.png', id: 'curly-Faux Hawk', barber: 'Buzz Barber', cell: "(213) 513-8040", likes: "10" },
    { picture: '../../assets/imgs/images.png', id: 'fade-with-beard', barber: 'Buzz Barber', cell: "(213) 513-8040", likes: "10" },
    { picture: '../../assets/imgs/images-1.png', id: 'faux-hawk-fade', barber: 'Buzz Barber', cell: "(213) 513-8040", likes: "10" },
    { picture: '../../assets/imgs/flattop.png', id: 'flat-top', barber: 'Buzz Barber', cell: "(213) 513-8040", likes: "10" }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.currentItem = this.items.filter((item) => {
      if(item.id === this.id){
        return item;
      }
    })
    this.currentItem = this.currentItem[0];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfroPage');
  }

  openPage() {
    this.navCtrl.push(TryOutPage);
  }

    
}
