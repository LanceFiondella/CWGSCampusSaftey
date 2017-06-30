import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Questions } from '../../../providers/questions';

@Component({
  selector: 'page-question-detail',
  templateUrl: 'question-detail.html'
})
export class QuestionDetailPage {
  question: any;

  constructor(public navCtrl: NavController, navParams: NavParams, questions: Questions) {
    this.question = navParams.get('question');
  }

}
