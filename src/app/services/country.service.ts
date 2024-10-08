import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  // Fetch all countries
  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch country by name
  getCountryByName(name: string): Observable<any> {
    return this.http.get<any[]>(`https://restcountries.com/v3.1/name/${name}`);
  }
}
