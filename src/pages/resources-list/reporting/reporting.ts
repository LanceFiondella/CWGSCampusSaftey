import { Component, OnInit } from '@angular/core';


import { ReportingResource } from './../../../models/resources-list/reporting-resource.interface';
import reportingData from './../../../models/resources-list/reporting-data';

@Component({
  selector: 'page-reporting',
  templateUrl: 'reporting.html'
})

export class ReportingPage implements OnInit{
  reportingResourceCollection: {category: string, resources: ReportingResource[]}[];

  ngOnInit(){
    this.reportingResourceCollection = reportingData;
  }
}