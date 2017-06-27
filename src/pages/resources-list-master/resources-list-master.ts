import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, transition,animate } from '@angular/animations';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { SearchPage } from '../search/search';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';
import { Resource } from '../../models/resource';

@Component({
  selector: 'resources-page-list-master',
  templateUrl: 'resources-list-master.html',
  animations:[
    trigger('expandedPanelVisibility',[
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('invisible => visible', animate('3.5s'))
    ])
  ]
})
export class ResourcesListMasterPage {
 hospitals: any[];
 police: any[];
 resourcesList: any[];

  constructor(public navCtrl: NavController) {
    let hospitals = [
      {
        name:"Charlton Memorial Hospital",
        address: "363 Highland Ave, Fall River, MA 02720",
        phoneNumber: "(508) 679-3131",
        description: "Best for when you just got hurt.",
        icon:"ios-add-circle-outline",
        visibleState: 'invisible'
      },
      {
        name:"St. Luke's Hospital",
        address: "101 Page St, New Bedford, MA 02740",
        phoneNumber: "(508) 997-1515",
        description: "Best for when you just got hurt.",
        icon:"ios-add-circle-outline",
        visibleState: 'invisible'
      }
    ]
    let police = [
        {
          name:"Tucker"
        }
    ]
    let resourcesList = [
      {
        title: "Local Hospitals",
        details: {hospitals}
      }
    ]
    //vscode Icons
  }

  toggleDetails(data) {
    if (data.visibleState == "invisible") {
        data.visibleState = "visible";
        data.icon = 'ios-remove-circle-outline';
    } else {
        data.visibleState = "invisible";
        data.icon = 'ios-add-circle-outline';
    }
  }
  //this video https://www.youtube.com/watch?v=8pOsJDZbJk0 might help with animations
}
