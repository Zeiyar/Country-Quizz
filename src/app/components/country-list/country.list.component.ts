import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: any[] = [];
  fullCountryList: any[] = [];
  loading = true;
  sorted = true;
  hoveredCountryCode: string | null = null;

  constructor(private route: ActivatedRoute ) {}

  // Lifecycle hook to load countries on component initialization
  ngOnInit(): void {
    const data = this.route.snapshot.data['countries'];

    // sécurité
    this.countries = [...data].sort(
      (a, b) => b.population - a.population
    );

    this.fullCountryList = data;
    this.loading = false;
  }

  sortByPopulation(): void {
    if(this.sorted){
        this.countries.sort((a, b) => a.population - b.population);
    }else{
        this.countries.sort((a, b) => b.population - a.population);
    }
    this.sorted = !this.sorted;
  }
  
  onSearch(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    console.log(searchTerm);
    this.countries = this.fullCountryList.filter(country =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
  }
  getAllCountryObservable : Subscription | undefined;
    // Lifecycle hook for component destruction
  ngOnDestroy(): void {
    console.log("destruction du component");
    this.getAllCountryObservable?.unsubscribe();
  }
}