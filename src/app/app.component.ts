import { Component } from '@angular/core';
import { CustomerSelection } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inventoryUpdates: CustomerSelection[] = [];

  addToCart(value: CustomerSelection) {
    // if an item with the same name as value exists in the inventoryUpdates array, the find() method will return that item as an object. Otherwise, it will return undefined
    const item = this.inventoryUpdates.find(
      (i) => i.name == value.name
    );
    // check if item is a truthly or fasely value
    // if item with same name exist then turthly we assign 
    // the value to the item quantity
    if (!!item) item.quantity = value.quantity;
    else this.inventoryUpdates.push(value);
    console.log(this.inventoryUpdates);
  }
}
