import { Component } from '@angular/core';
import { CustomerSelection } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: CustomerSelection[] = []

  selected(selection: CustomerSelection) {
    console.info('>>> app.component selected: ', selection)
    this.content.push(selection)
  }

  deleteItem(i: number) {
    // Start at index 1, delete 1 item
    this.content.splice(i, 1)
  }
}
