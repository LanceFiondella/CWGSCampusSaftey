import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { PoliceStationPage } from './police-station/police-station';
import { HospitalPage } from './hospital/hostpital';
import { CounselingPage } from './counseling/counseling';
import { OnCampusHelpPage } from './on-campus-help/on-campus-help';
import { ReportingPage } from './reporting/reporting';


@Component({
  selector: 'page-resource-list',
  templateUrl: 'resource-list.html'
})

export class ResourceList{
  hospitalPage = HospitalPage;
  policeStationPage = PoliceStationPage;
  onCampusHelpPage = OnCampusHelpPage;
  counselingPage = CounselingPage;
  reportingPage = ReportingPage;

  constructor(private navCtrl:NavController){
  
  }
  
}