import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { SettingsPage } from './../settings/settings';
import { JustAssaultedPage } from './just-assaulted/just-assaulted';
import { HospitalPage } from './hospital/hostpital';
import { PoliceStationPage } from './police-station/police-station';
import { OnCampusHelpPage } from './on-campus-help/on-campus-help';
import { CounselingPage } from './counseling/counseling';


@Component({
  selector: 'page-resource-list',
  templateUrl: 'resource-list.html'
})

export class ResourceList{
  settingsPage = SettingsPage;
  justAssaultedPage = JustAssaultedPage;
  hospitalPage = HospitalPage;
  policeStationPage = PoliceStationPage;
  onCampusHelpPage = OnCampusHelpPage;
  counselingPage = CounselingPage;
  
  constructor(private navCtrl:NavController){
  
  }
  
}