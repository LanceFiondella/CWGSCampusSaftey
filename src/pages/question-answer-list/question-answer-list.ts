import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


import { QuestionDetailPage } from './question-detail/question-detail';
import { SearchPage } from './search/search';

import { Questions } from '../../providers/questions';
import { Question } from '../../models/question';

@Component({
  selector: 'question-answer-list',
  templateUrl: 'question-answer-list.html'
})

export class QuestionAnswerList{
  currentQuestions: Question[];

  constructor(public navCtrl: NavController, public questions: Questions, public modalCtrl: ModalController) {
    this.currentQuestions = this.questions.query();
  }

  /**
   * Navigate to the detail page for this question.
   */
  openQuestion(question: Question) {
    this.navCtrl.push(QuestionDetailPage, {
      question: question
    });
  }
  
  searchQuestion(){
    this.navCtrl.push(SearchPage);
  }

}