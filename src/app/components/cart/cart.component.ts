import { Component, Input } from '@angular/core';
import { CustomerSelection } from 'src/app/models';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // passing data from parent component to child 
  @Input() cartItems: CustomerSelection[] = [];
}
