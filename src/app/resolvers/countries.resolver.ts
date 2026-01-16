import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { CountryService } from '../services/country.service';

export const countriesResolver: ResolveFn<any[]> = () => {
  const countryService = inject(CountryService);
  return countryService.getAllCountries();
};
