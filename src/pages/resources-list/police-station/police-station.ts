import { Component, OnInit } from '@angular/core';

import { PoliceStation } from './../../../models/resources-list/police-station.interface';
import policeStations from './../../../models/resources-list/police-station-data';
@Component({
  selector: 'page-police-station',
  templateUrl: 'police-station.html'
})
export class PoliceStationPage implements OnInit{
  policeStationCollection: PoliceStation[];

  ngOnInit(){
    this.policeStationCollection = policeStations;
  }
}