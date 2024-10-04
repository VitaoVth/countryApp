import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  country: any;  // Holds the country data

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit() {
    const countryName = this.route.snapshot.paramMap.get('name');  // Get the country name from the route parameters
    this.countryService.getCountryByName(countryName).subscribe(data => {
      this.country = data[0];  // Assuming the API returns an array of results, the first entry is the country
    });
  }
}
