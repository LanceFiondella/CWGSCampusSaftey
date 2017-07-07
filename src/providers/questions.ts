import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Question } from '../models/question';
import questionData from '../models/question-data'

@Injectable()
export class Questions {
  questions: Question[] = [];

  constructor(public http: Http) {
    let questions = questionData;

    for (let question of questions) {
      this.questions.push(new Question(question));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.questions;
    }

    return this.questions.filter((question) => {
      for (let key in params) {
        let field = question[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return question;
        } else if (field == params[key]) {
          return question;
        }
      }
      return null;
    });
  }

  add(question: Question) {
    this.questions.push(question);
  }

  delete(question: Question) {
    this.questions.splice(this.questions.indexOf(question), 1);
  }

}
