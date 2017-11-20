import { Component } from '@angular/core';

import { NativeDeviceFeatures } from './../../../providers/native-device-features';

import { ReportingResource } from './../../../models/resources-list/reporting-resource.interface';
import reportingData from './../../../models/resources-list/reporting-data';

@Component({
  selector: 'page-reporting',
  templateUrl: 'reporting.html'
})

export class ReportingPage{
  reportingResourceCollection: {category: string, resources: ReportingResource[]}[];

  constructor(private nativeDeviceFeatures:NativeDeviceFeatures){
    this.reportingResourceCollection = reportingData;
  }
}