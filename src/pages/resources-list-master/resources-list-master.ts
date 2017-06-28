import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, transition,animate } from '@angular/animations';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { SearchPage } from '../search/search';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';
import { Data } from '../../models/data';

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
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class ResourcesListMasterPage {
  data: Data[] = [];
  constructor(public navCtrl: NavController) {
    let data = [
      {
        title:"Local Hospitals",
        details:"Hopped up on catnip use lap as chair groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked. Licks paws eat from dog's food or annoy kitten brother with poking toy mouse squeak roll over. Relentlessly pursues moth destroy the blinds love to play with owner's hair tie small kitty warm kitty little balls of fur for groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked fooled again thinking the dog likes me cough furball. Chase ball of string chase red laser dot but scratch leg; meow for can opener to feed me, get video posted to internet for chasing red dot stand in front of the computer screen.",
        icon:"ios-add-circle-outline",
        visibleState: 'invisible'
      },
      {
        title:"Local Police Station",
        details:"lorem",
        icon:"ios-add-circle-outline",
        visibleState: 'invisible'
      },
      {
        title:"Local Crisis Center",
        details:"lorem",
        icon:"ios-add-circle-outline",
        visibleState: 'invisible'
      },
      {
        title:"Local Counseling",
        details:"lorem",
        icon:"ios-add-circle-outline",
        visibleState: 'invisible'
      },
      {
        title:"UMD Sexual Assault Policy",
        details:"lorem",
        icon:"ios-add-circle-outline",
        visibleState: 'invisible'
      }
    ];
    for (let item of data) {
      this.data.push(new Data(item));
    }
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
