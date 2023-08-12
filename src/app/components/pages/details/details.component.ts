import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: FoodService,    
    private router: Router, private cartService: CartService) { 
    activatedRoute.params.subscribe((params) => {
      if(params.id)
     foodService.getFoodById(params.id).subscribe(serverFood => {
      this.food = serverFood;
    });
    })
  }

  ngOnInit(): void {
    
  } 

  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }

}
