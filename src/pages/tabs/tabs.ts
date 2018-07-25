import { Component, ViewChild } from '@angular/core';
import { BioPage } from '../bio/bio';
import { ExplorePage } from '../explore/explore';



@Component({
  templateUrl: 'tabs.html',
  
})
export class TabsPage {


  tab2Root = ExplorePage;
  tab1Root = BioPage;

    constructor(){}

  tabChanged(ev){
    console.log('tab change')
    console.log(ev.tabIcon)
    if(ev.tabIcon === "compass"){
      console.log('set root');
      ev.setRoot(ExplorePage);
    }
  }
}


