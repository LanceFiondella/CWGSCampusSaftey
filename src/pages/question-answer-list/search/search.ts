import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QuestionDetailPage } from '../question-detail/question-detail';

import { Question } from '../../../models/question';
import { Questions } from '../../../providers/questions';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  currentQuestions: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public questions: Questions) { }

  /**
   * Perform a service for the proper questions.
   */
  getQuestions(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentQuestions = [];
      return;
    }
    this.currentQuestions = this.questions.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this question.
   */
  openQuestion(question: Question) {
    this.navCtrl.push(QuestionDetailPage, {
      question: question
    });
  }

}
