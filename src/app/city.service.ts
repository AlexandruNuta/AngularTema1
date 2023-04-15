import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
  export class CityService {
    private citiesUrl = 'assets/cities.json';

    constructor(private http: HttpClient) { }
  
    getCities(): Observable<City[]> {
      return this.http.get<City[]>(this.citiesUrl);
    }
  }

  export interface City {
    name: string;
    image: string;
    description: string;
  }