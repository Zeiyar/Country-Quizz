import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
    private flagQuizService: FlagQuizService,
    private cdr: ChangeDetectorRef
  ) {}

  countries: any[] = [];
  score = 0;
  questionNumber = 1;
  readonly TOTAL_QUESTIONS = 10;
  isFinished = false;
  
  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(countries => {
      this.countries = countries;
      this.loadQuestion();
    });
  }

    loadQuestion(): void {
        this.question = this.flagQuizService.generateQuestion(this.countries);
    }
  nextQuestion(): void {
    console.log("Next question called");
    if (!this.question) {
        console.log("no question loaded");
        return;
    }
    if (this.question.isCorrect) {
      this.score++;
    }
    if (this.questionNumber + 1 > this.TOTAL_QUESTIONS) {
      this.isFinished = true;
      return;
    }
    this.questionNumber++;
    console.log("Loading next question");
    this.loadQuestion();
}

  selectOption(option: string): void {
  if (!this.question || this.question.userAnswer) {
    return;
  }

  this.question.userAnswer = option;
  this.question.isCorrect = option === this.question.correctAnswer;

  setTimeout(() => {
    console.log("Moving to next question");
    this.nextQuestion();
    this.cdr.detectChanges();
  }, 3000);
}
}