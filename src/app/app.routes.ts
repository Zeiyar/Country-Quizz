import { Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country.list.component';
import { FlagQuizComponent } from './components/flag-quiz/flag-quiz.component';
import { countriesResolver } from './resolvers/countries.resolver';

export const routes: Routes = [
  {
    path: '',
    component: CountryListComponent,
    resolve: {
      countries: countriesResolver
    }
  },
  {
    path: 'quiz',
    component: FlagQuizComponent,
    resolve: {
      countries: countriesResolver
    }
  }
];
    