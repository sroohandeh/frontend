import { Food } from "./Food";

export class CartItem{
    constructor(private food: Food){}    
    quantity: number = 1;
    price: number = this.food.price
}