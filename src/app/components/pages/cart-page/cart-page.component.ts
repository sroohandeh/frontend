import { Component, OnInit } from '@angular/core';

import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart: Cart) =>
    {
      this.cart = cart;
    } )
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  removeFromCart(cartItem : CartItem){
    this.cartService.removeFromCart(cartItem.food.id)

  }

  changeQuantity(cartItem:CartItem, quantityString: string){
    const quantity = parseInt(quantityString);
    this.cartService.changeQuantity(cartItem.food.id, quantity)
  }
}
