import { Component, OnInit } from '@angular/core';

import { OnCampusHelp } from './../../../models/resources-list/on-campus-help.interface';
import onCampusHelpResources from './../../../models/resources-list/on-campus-help-data'
@Component({
  selector: 'page-on-campus-help',
  templateUrl: 'on-campus-help.html'
})

export class OnCampusHelpPage implements OnInit{
  onCampusHelpCollection: OnCampusHelp[];
  
  ngOnInit(){
    this.onCampusHelpCollection = onCampusHelpResources;
  }
}