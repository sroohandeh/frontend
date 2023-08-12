import { sample_foods, sample_tags } from 'src/data';

import { Food } from '../shared/models/Food';
import { Injectable } from '@angular/core';
import { Tags } from '../shared/models/Tags';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/models/constant/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAllTags(): Tags[] {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL)
  }

  getAllFoodsBySearchTerm(searchTerm: string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tags[]>{
    return this.http.get<Tags[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTags(tag:string):Observable<Food[]>{
    return tag == 'All'? this.getAll():this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);       
  }

  getFoodById(id: number): Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + id)
  }
}
