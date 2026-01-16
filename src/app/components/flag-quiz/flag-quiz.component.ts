import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { FlagQuizService } from '../../services/flag_quizz.service';
import { FlagQuestion } from '../../models/flag-question.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flag-quiz',
    standalone: true,
    imports: [CommonModule, RouterModule],
  templateUrl: './flag-quiz.component.html',
  styleUrls: ['./flag-quiz.component.css']
})
export class FlagQuizComponent implements OnInit {
    // question?: FlagQuestion | null = null;
  constructor(
    private countryService: CountryService,
    private flagQuizService: FlagQuizService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {}
    question = this.createEmptyQuestion();
 private createEmptyQuestion(): FlagQuestion{
    return{
        flagUrl:'',
        options:[],
        correctAnswer:'',
    }
  }

  countries: any[] = [];
  score = 0;
  questionNumber = 1;
  readonly TOTAL_QUESTIONS = 10;
  isFinished = false;
  isReady = false;
  
  ngOnInit(): void {
     this.countries = this.route.snapshot.data['countries'];

  // sécurité
  this.countries = this.countries.filter(c =>
    c.name?.common && c.flags?.png
  );

  this.loadQuestion();
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