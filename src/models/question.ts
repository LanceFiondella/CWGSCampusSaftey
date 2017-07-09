export class Question {

  id: string;
  question: string;
  answer: string;

  constructor(q: Question) {
      this.id = q.id;
      this.question = q.question;
      this.answer = q.answer;
  }
}