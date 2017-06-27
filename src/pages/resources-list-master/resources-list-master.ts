import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { SearchPage } from '../search/search';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';

@Component({
  selector: 'resources-page-list-master',
  templateUrl: 'resources-list-master.html'
})
export class ResourcesListMasterPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

}
