import { sample_foods, sample_tags } from 'src/data';

import { Food } from '../shared/models/Food';
import { Injectable } from '@angular/core';
import { Tags } from '../shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAllTags(): Tags[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getAll(): Food[] {
    return sample_foods
  }

  getAllFoodsBySearchTerm(searchTerm: string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tags[]{
    return sample_tags;
  }

  getAllFoodsByTags(tag:string):Food[]{
    return tag == 'All'? this.getAll():this.getAll().filter(food => food.tags?.includes(tag));       
  }
}
