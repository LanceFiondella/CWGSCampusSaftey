export class Question {
  question: string;
  answer: string;

  constructor(q: Question) {
      this.question = q.question;
      this.answer = q.answer;
  }
}
