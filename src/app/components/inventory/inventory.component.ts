import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { INVENTORIES } from 'src/app/constant';
import { CustomerSelection, Inventory } from 'src/app/models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
    // 1. variable called "inventories" which is an array of Inventory objects
    // value of INVENTORIES is being assigned to the variable inventories
    // holding all the images 
    inventories: Inventory[] = INVENTORIES

    // use this as a counter
    quantity = 0

    // annonate with @Output() - output property for a component
    // output property is used to pass value from a child component to its parent component.
    @Output()
    // Subject Class in rxjs allows to emit and subscribe to events
    // onSelection will observe for events of type CustomerSelection
    onSelection = new Subject<CustomerSelection>()

    // selected function/method that takes in name type string as parameter
    selected(name: string) {
      // new object name selection with two properties name and quantity is created here
      const selection = {
        name,
        // this.quantity is refering to the quantity = 0 in InventoryComponent Class
        quantity: this.quantity
      // as keyword is use to cast selection object to the CustomerSelection interface 
      } as CustomerSelection
      // next() is call to "invoke"/"listen" the event 
      this.onSelection.next(selection)
    }
    
    // addTo function/method that takes in i type number as parameter
    addTo(i: number) {
      this.quantity += i
    }
}
