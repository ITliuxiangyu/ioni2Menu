import { Component , ViewChild} from '@angular/core';

import { App, MenuController , NavController} from 'ionic-angular';


@Component({
  templateUrl:"rootPage.html"
})
export class BasicPage {
  menuNumber = "Menu 1";

  @ViewChild("mycontent") nav:NavController;

  constructor(app: App, public menu: MenuController , public navCtr:NavController) {
    menu.enable(true);
  }
  menu1Click(){
        this.menuNumber = "Menu 1";
    }

    menu2Click(){
        this.menuNumber = "Menu 2";
    }

    toggleClick(){
      if(this.menuNumber == "Menu 1"){
        console.log("我是toggle");
        this.menu.enable(false, 'second');
        this.menu.enable(true, 'first');
        // console.log(this.menu.open());
        // this.menu.open("second");
        // this.menu.toggle("right");
        this.menu.toggle("first");
        console.log(this.menu);
      } else {
        console.log("我是toggle");
        this.menu.enable(true, 'second');
        this.menu.enable(false, 'first');
        // console.log(this.menu.open());
        // this.menu.open("second");
        // this.menu.toggle("right");
        this.menu.toggle('second');
        console.log(this.menu);
      }
        
    }
}





