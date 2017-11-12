import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';


@Injectable()
export class NativeDeviceFeatures {

  constructor(private platform: Platform, private sanitizer:DomSanitizer){

  }

  onOpenDialer(phoneNumber: string) {
    return "tel:" + phoneNumber;
  }

  onOpenMaps(location: string, locationName?:string) {
    let temp = "";
    let ifLocationName = "";
   //if on ios
    if(this.platform.is("ios")) {
      //?ll=location
      temp = "maps:?q=" + location;
      return this.sanitizer.bypassSecurityTrustUrl(temp);
    }
    //else must be android
    else {
      //if a location name is provided, add it to the google maps intent URI
      if(locationName){
        ifLocationName = "(" + locationName + ")"
      }
      temp = "geo:?q=" + location + ifLocationName;
      return this.sanitizer.bypassSecurityTrustUrl(temp);
    }
  }
}
