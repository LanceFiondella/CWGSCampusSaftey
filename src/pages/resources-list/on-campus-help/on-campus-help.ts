import { Component } from '@angular/core';

import { NativeDeviceFeatures } from './../../../providers/native-device-features';

import { OnCampusHelp } from './../../../models/resources-list/on-campus-help.interface';
import onCampusHelpResources from './../../../models/resources-list/on-campus-help-data'
@Component({
  selector: 'page-on-campus-help',
  templateUrl: 'on-campus-help.html'
})

export class OnCampusHelpPage{
  onCampusHelpCollection: OnCampusHelp[];
  
  constructor(private nativeDeviceFeatures:NativeDeviceFeatures){
    this.onCampusHelpCollection = onCampusHelpResources;
  }
}