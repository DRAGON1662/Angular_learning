import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Users list';
  typesOfShoes: string[] = ['Boots', 'Marge', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
