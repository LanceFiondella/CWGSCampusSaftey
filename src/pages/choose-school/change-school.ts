//Ionic & Angular
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Pages
import { PrivacyPolicyPage } from '../legal/privacy-policy/privacy-policy';
import { TermsOfServicePage } from '../legal/terms-of-service/terms-of-service';
import { SchoolListPage } from './school-list/school-list';
//Services
import { Settings } from '../../providers/settings';
//Model
import { School } from '../../models/school-interface';
import schoolInfo from './../../models/school-info';

@Component({
  selector: "page-change-school",
  templateUrl: "change-school.html"
})

export class ChangeSchoolPage {
  privacyPolicy = PrivacyPolicyPage;
  termsOfServicePage = TermsOfServicePage;
  schoolList = SchoolListPage;
  currentSchool: School = {
    name: "",
    logo: ""
  };

  constructor(private navCtrl:NavController, private settings: Settings) {
  }

  ionViewWillEnter(){
    //get the current school value and show it
    this.settings.getValue("school")
    .then( (school) => {
      this.setValues(school);
    })
  }
  getImage() {
    return this.currentSchool.logo
  }
  
  setValues(school: School) {
    this.currentSchool.name = school.name;
    this.currentSchool.logo = school.logo;
  }
}