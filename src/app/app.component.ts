import {Component} from '@angular/core';

interface Car {
  vin: string;
  year: string;
  brand: string;
  color: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  cars: Car[] = [{vin: 'dffdf', year: '2018', brand: 'bmw', color: 'red'}];

  selectedCars: Car[];

}
