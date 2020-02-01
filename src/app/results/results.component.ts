import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { HelperService } from '../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [QuizService, HelperService]
})
export class ResultsComponent implements OnInit {

  // quizes: any[];
  // quiz: Quiz = new Quiz(null);
  // mode = 'result';
  // quizName: string;

  constructor(private quizService: QuizService, private router: Router) { }
  // isCorrect(question: Question) {
  //   return question.options.every(x => x.selected === x.isAnswer) ? 'richtig' : 'falsch';
  // };

  best() {
    this.router.navigate([''])
  }

  // isAnswered(question: Question) {
  //   return question.options.find(x => x.selected) ? 'Beantwortet' : 'Nicht Beantwortet';
  // };

  ngOnInit() {
  }

}
