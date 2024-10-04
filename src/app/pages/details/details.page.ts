import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  country: any;

  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit() {
    const countryName = this.route.snapshot.paramMap.get('name');
    if (countryName) {
      this.countryService.getCountryByName(countryName).subscribe(data => {
        this.country = data[0];
      });
    } else {
      // Trate o caso em que o nome do país é null
      console.error('Nome do país não encontrado na rota');
    }
  }
}
