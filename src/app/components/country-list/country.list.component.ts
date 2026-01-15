import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent implements OnInit {

  countries: any[] = [];
  loading = true;

  constructor(private countryService: CountryService) {}

  // Lifecycle hook to load countries on component initialization
  ngOnInit(): void {
    this.loadCountries();
    console.log("initialisation du component");
  }

  // Load all countries from the service
  loadCountries(): void {
    this.countryService.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
    // Lifecycle hook for component destruction
  ngOnDestroy(): void {
    console.log("destruction du component");
  }
}