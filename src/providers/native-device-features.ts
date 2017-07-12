import { Injectable } from '@angular/core';

@Injectable()
export class NativeDeviceFeatures {
  constructor(){

  }

  onOpenDialer(phoneNumber: string){
    return "tel:" + phoneNumber;
  }

}