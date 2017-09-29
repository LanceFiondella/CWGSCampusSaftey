//Ionic & Angular
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Pages
//Providers
import { Settings } from '../../../providers/settings';
//Model
import { School } from '../../../models/school-interface';
import schoolInfo from './../../../models/school-info';


@Component({
  selector:"page-school-list",
  templateUrl:"school-list.html"
})

export class SchoolListPage {
  schoolCollection = schoolInfo;

  constructor(private navCtrl: NavController,private settings:Settings) {
  }
  
  onChosenSchool(school:School) {
    //set new school
    this.settings.setValue("school",school);
    this.navCtrl.pop();
   }
}