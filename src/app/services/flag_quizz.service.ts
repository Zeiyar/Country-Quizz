import { Injectable } from '@angular/core';
import { FlagQuestion } from '../models/flag-question.model';

@Injectable({
  providedIn: 'root'
})
export class FlagQuizService {
// Method to generate a flag question
  generateQuestion(countries: any[]): FlagQuestion {
    const correctCountry = this.getRandomCountry(countries);
    const correctName = correctCountry.name.common;

    const options = [
      ...this.getRandomCountryNames(countries, correctName),
      correctName
    ].sort(() => Math.random() - 0.5);

    return {
      flagUrl: correctCountry.flags.png,
      options,
      correctAnswer: correctName
    };
  }
// Helper methods to get random country and names
  private getRandomCountry(countries: any[]): any {
    return countries[Math.floor(Math.random() * countries.length)];
  }
// Get three random country names excluding the correct one
  private getRandomCountryNames(
    countries: any[],
    correctName: string
  ): string[] {
    return countries
      .map(c => c.name.common)
      .filter(name => name !== correctName)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }
}