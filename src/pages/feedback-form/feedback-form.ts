//Library Imports
import { Component } from '@angular/core';
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
  postObservable: Observable<any>;

  constructor(private http: HttpClient) { }

  sendData(){
    this.disabled = true;
    console.log(this.userInput);
    let body = {
        message: this.userInput
    };
    this.postObservable = this.http.post('http://localhost:5400/api/feedbackform', body)
    .catch((err) => {
      console.log(err);
      return Observable.of(err);
    })
    this.postObservable.subscribe();
  }
}
