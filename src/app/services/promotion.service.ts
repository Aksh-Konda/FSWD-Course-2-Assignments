import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000)).toPromise();
  }

  getPromotion(id: string): Promise<Promotion> {
    return of(PROMOTIONS.find((promo: Promotion) => promo.id == id))
      .pipe(delay(2000)).toPromise();
  }

  getFeaturedPromotion(): Promise<Promotion> {
    return of(PROMOTIONS.find((promo: Promotion) => promo.featured))
      .pipe(delay(2000)).toPromise();
  }

}
