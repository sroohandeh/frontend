import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];

  constructor(private foodService:FoodService, activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe(params => {
      if(params.searchTerm)
        this.foods = foodService.getAllFoodsBySearchTerm(params.searchTerm);
        else if(params.tag)
        this.foods = this.foodService.getAllFoodsByTags(params.tag);
      else
        this.foods = foodService.getAll(); 
      

    })
  
  }
  ngOnInit(): void {    
  }  

}
