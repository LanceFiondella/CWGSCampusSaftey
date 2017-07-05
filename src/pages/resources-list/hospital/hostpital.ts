import { Component, OnInit } from '@angular/core';

import { Hospital } from './../../../models/resources-list/hospital.interface';
import hospitals from './../../../models/resources-list/hospital-data'

@Component({
  selector: 'page-hospital',
  templateUrl: 'hospital.html'
})
export class HospitalPage implements OnInit {
  hospitalCollection: Hospital[];

  ngOnInit(){
    this.hospitalCollection = hospitals;
  }
}