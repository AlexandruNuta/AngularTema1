import { Component ,EventEmitter,Output} from '@angular/core';
import { CityService } from '../city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent{
  searchTerm: string = '';
  cityList: any[] = [];

  @Output() search = new EventEmitter<string>();
  constructor(private cityService: CityService,private router:Router) {}

  ngOnInit(): void {
    this.cityService.getCities().subscribe(data => {
      this.cityList = data;
    });
  }
  onSearch(): void {
    this.search.emit(this.searchTerm);
    this.router.navigate(['/cities'], { queryParams: { search: this.searchTerm } });
  }

}
