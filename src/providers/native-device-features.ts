import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';


@Injectable()
export class NativeDeviceFeatures {

  constructor(private platform: Platform, private sanitizer:DomSanitizer){
    
  }

  onOpenDialer(phoneNumber: string){
    return "tel:" + phoneNumber;
  }

  onOpenMaps(location: string){
    let temp = "";

    if(this.platform.is("ios")){
      temp = "maps:?q=" + location;
      return this.sanitizer.bypassSecurityTrustUrl(temp);
    } 
    else{
      temp = "geo:?q=" + location;
      return this.sanitizer.bypassSecurityTrustUrl(temp);
    }
  }
}