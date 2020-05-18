import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getDish(id: string): Dish {
    return DISHES.find((dish: Dish) => dish.id == id);
  }

  getFeaturedDish(): Dish {
    return DISHES.find((dish: Dish) => dish.featured);
  }
}
