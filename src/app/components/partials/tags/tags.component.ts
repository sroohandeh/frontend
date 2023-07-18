import { Component, OnInit } from '@angular/core';

import { FoodService } from 'src/app/services/food.service';
import { Tags } from 'src/app/shared/models/Tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  tags?:Tags[]

  constructor(foodService: FoodService){
    this.tags = FoodService.getAllTags()
  }
}
