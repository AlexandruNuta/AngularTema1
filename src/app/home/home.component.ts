import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title='New Adventure';
  selectedCity: string='';
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.selectedCity = this.route.snapshot.paramMap.get('cities')!;
    console.log(this.selectedCity);
    if (this.selectedCity) {
      this.title = this.selectedCity + ' Adventure';
     // console.log(this.title);
    }
  }
  onVisitNow(cityName: string) {
    this.title = cityName;
  }
}
