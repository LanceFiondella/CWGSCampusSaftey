//Library Imports
import { Component } from '@angular/core';
import { NativeDeviceFeatures } from '../../providers/native-device-features';

//For HTTP
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { async } from '@angular/core/testing';


@Component({
  selector: 'page-feedback-form',
  templateUrl: 'feedback-form.html',
})
export class FeedbackFormPage {
  disabled: boolean;
  userInput: String;
  postRequestObservable: Observable<any>;
  userPlatform: String;

  constructor(private http: HttpClient, private nativeDeviceFeatures:NativeDeviceFeatures) { }

  sendData(){
    this.disabled = true;
    console.log(this.userInput);
    let body = {
        message: this.userInput,
        sentFrom: "Sent from " + this.nativeDeviceFeatures.getPlatform() + " Ionic App"
    };
    this.postRequestObservable = this.http.post('http://localhost:5400/api/feedbackform', body)
    .catch((err) => {
      console.log(err);
      return Observable.of(err);
    })
    this.postRequestObservable.subscribe();
  }
}
