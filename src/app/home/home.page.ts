import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  countries: any[] = [];  // Array to hold the countries data

  constructor(private countryService: CountryService, private navCtrl: NavController) { }

  ngOnInit() {
    this.countryService.getAllCountries().subscribe(data => {
      this.countries = data;  // Assign the fetched data to the countries array
    });
  }

  openDetails(countryName: string) {
    this.navCtrl.navigateForward(`/details/${countryName}`);  // Navigate to the details page with the country name
  }
}

  

