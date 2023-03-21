import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { Inventory } from 'src/app/models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent {
  // INVENTORIES[] with all the value 
  INVENTORIES: Inventory[] = [
    { name: 'Acron Squash', imageUrl: 'acorn_squash', quantity: 0 },
    { name: 'Bell Pepper', imageUrl: 'bell_pepper', quantity: 0 },
    { name: 'Carrot', imageUrl: 'carrot', quantity: 0 },
    { name: 'Eggplant', imageUrl: 'eggplant', quantity: 0 },
    { name: 'Mushroom', imageUrl: 'mushroom', quantity: 0 },
    { name: 'Tomato', imageUrl: 'tomato', quantity: 0 },
    { name: 'Zucchini', imageUrl: 'zucchini', quantity: 0 },
  ];

  // create a output() to pass name and quantity to parent component 
  @Output() inventoryUpdated = new Subject<{ name: string, quantity: number }>();

  // increase the quantity of the selected vegetable
  increaseQuantity(inventory: Inventory) {
    inventory.quantity++;
    // call .next() to fire the event 
    this.inventoryUpdated.next({ name: inventory.name, quantity: inventory.quantity });
  }
  // decrease the quantity of the selected vegetable
  decreaseQuantity(inventory: Inventory) {
    if (inventory.quantity > 0) {
      inventory.quantity--;
      this.inventoryUpdated.next({ name: inventory.name, quantity: inventory.quantity });
    }
  }
}