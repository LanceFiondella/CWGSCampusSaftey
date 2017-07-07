export class Question {

  id: string;
  question: string;
  answer: string;

  constructor(q: Question) {
    for (let fields in q) {
      this.id = q.id;
      this.question = q.question;
      this.answer = q.answer;
    }
  }
}