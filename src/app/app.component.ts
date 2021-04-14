import { Component } from '@angular/core';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End Web 100';
  url = environment.apiUrl;
  shoppingList = [
    'Beer',
    'Shampoo',
    'Taco Shells'
  ];

  // void addItem(string item)
  addItem(item: HTMLInputElement): void {
    this.shoppingList = [item.value, ...this.shoppingList];
    item.value = '';
    item.focus();
  }
}
