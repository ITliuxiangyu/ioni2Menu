import {Component} from '@angular/core';
import {
    NavController , 
    NavParams , 
    ActionSheetController , 
    Platform , 
    AlertController , 
    App , 
    MenuController
} from "ionic-angular";

import { BasicPage } from './menuPage';


@Component({
    selector:'page-hello-ionic' , 
    templateUrl:"hello-ionic.html" , 
})

export class HelloPage{
    rootPage: any = BasicPage;

    constructor(app: App, public menu: MenuController) {
        menu.enable(true);
    }

    


    
        
    
}


