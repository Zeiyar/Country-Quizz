import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { FlagQuizService } from '../../services/flag_quizz.service';
import { FlagQuestion } from '../../models/flag-question.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-flag-quiz',
    standalone: true,
    imports: [CommonModule],
  templateUrl: './flag-quiz.component.html',
  styleUrls: ['./flag-quiz.component.css']
})
export class FlagQuizComponent implements OnInit {

  question?: FlagQuestion;

  constructor(
    private countryService: CountryService,
    private flagQuizService: FlagQuizService
  ) {}

  countries: any[] = [];
  score = 0;
  questionNumber = 0;
  totalQuestions = 20;
  
  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(countries => {
      this.question = this.flagQuizService.generateQuestion(countries);
    });
  }

  selectOption(option: string): void {
  if (!this.question || this.question.userAnswer) {
    return;
  }

  this.question.userAnswer = option;
  this.question.isCorrect = option === this.question.correctAnswer;
}
}