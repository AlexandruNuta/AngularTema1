import { Component,OnInit,Output,EventEmitter,Input} from '@angular/core';
import { CityService } from '../city.service';
import { City } from '../city.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];

  @Output() visitNow= new EventEmitter<string>();
  @Input() searchTerm: string = '';

  constructor(private cityService: CityService,private router:Router,private route:ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.getCities();
  // }
  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.queryParams['term'] || '';
    this.getCities(this.searchTerm);
  }

  // getCities(): void {
  //   this.cityService.getCities()
  //     .subscribe(cities => this.cities = cities);
  // }
  getCities(term: string): void {
    this.cityService.getCities()
      .subscribe(cities => {
        this.cities = cities.filter(city => city.name.toLowerCase().includes(term.toLowerCase()));
      });
  }
  

  filterCitiesBySearchTerm(cities: City[]): City[] {
    return cities.filter(city => city.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  visitCity(cityName: string) {
    this.visitNow.emit(cityName);
    console.log(cityName);
   this.router.navigate([''], { state: {cityName} });
  }
}
