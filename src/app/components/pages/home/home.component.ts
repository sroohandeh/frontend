import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/shared/models/Food';
import { FoodService } from 'src/app/services/food.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Food[] = [];

  constructor(private foodService:FoodService, activatedRoute: ActivatedRoute){
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe(params => {
      if(params.searchTerm)
      foodsObservable = foodService.getAllFoodsBySearchTerm(params.searchTerm);
        else if(params.tag)
        foodsObservable = this.foodService.getAllFoodsByTags(params.tag);
      else
      foodsObservable = foodService.getAll(); 
      
      foodsObservable.subscribe(serverFoods =>{
        this.foods = serverFoods;
      })

    })
  
  }
  ngOnInit(): void {    
  }  

}
