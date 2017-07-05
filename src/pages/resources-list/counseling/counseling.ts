import { Component, OnInit } from '@angular/core';

import { Counseling } from './../../../models/resources-list/counseling.interface';
import counselingResources from './../../../models/resources-list/counseling-data';

@Component({
  selector: 'page-counseling',
  templateUrl: 'counseling.html'
})

export class CounselingPage implements OnInit{
  counselingCollection: Counseling[];
  
  ngOnInit(){
    this.counselingCollection = counselingResources;
  }
}