import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Question } from '../models/question';

@Injectable()
export class Questions {
  questions: Question[] = [];

  constructor(public http: Http) {
    let questions = [
      {
        "name": "What counts as sexual assault?",
        "about": "answer here..."
      },
      {
        "name": "What is consent?",
        "about": "answer here..."
      },
      {
        "name": "Is it assault if it was my partner?",
        "about": "answer here..."
      },
      {
        "name": "I have been assaulted, what do I do next?",
        "about": "answer here..."
      },
      {
        "name": "Is it safe to inform law enforcement",
        "about": "answer here..."
      },
      {
        "name": "Where can I file a report?",
        "about": "answer here..."
      },
      {
        "name": "etc",
        "about": "answer here..."
      }
    ];

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
