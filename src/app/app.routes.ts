import { Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country.list.component';
import { FlagQuizComponent } from './components/flag-quiz/flag-quiz.component';

export const routes: Routes = [
    {
        path: '',
        component: CountryListComponent
    },
    {
        path: 'quiz',
        component: FlagQuizComponent
    }
];