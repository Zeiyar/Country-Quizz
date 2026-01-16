import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { CountryList } from '../models/country-list.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<CountryList[]> {
    const fields = [
    'name',
    'flags',
    'capital',
    'region',
    'population',
    'cca3'
  ].join(',');
    return this.http.get<CountryList[]>(`${this.apiUrl}/all?fields=${fields}`);
  }
}