import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AfroPage } from '../afro/afro';

/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  searchQuery: string = '';
  items;
  result;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      { picture: '../../assets/ready/afro.jpg', id: 'afro', barber: 'Buzz Barber', cell: "(213) 513-8040", likes: "10" },
      { picture: '../../assets/ready/cool.jpg', id: 'afro', barber: 'Buzz Barber', cell: "(213) 513-8040", likes: "10" },
      { picture: '../../assets/ready/fade.jpg', id: 'afro', barber: 'Buzz Barber', cell: "(213) 513-8040", likes: "10" },

    ];
    this.result = this.items;

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.result = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }
  onInput(event) {
    console.log(event.target.value)
  }
  changePage(id) {
    this.navCtrl.push(AfroPage, { id: id });
  }


}