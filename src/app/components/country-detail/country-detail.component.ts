import { Component, Input } from '@angular/core';
import { CountryList } from '../../models/country-list.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailsComponent {
  @Input() country!: CountryList;

  isHovered = false;
}