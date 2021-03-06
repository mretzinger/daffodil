import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { DaffAddToCart } from '@daffodil/cart/state';
import { DaffModalModule } from '@daffodil/design';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AddToCartNotificationEffects } from './add-to-cart-notification.effects';
import { OpenAddToCartNotification } from '../actions/add-to-cart-notification.actions';


describe('AddToCartNotificationEffects', () => {
  let actions$: Observable<any>;
  let effects: AddToCartNotificationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffModalModule
      ],
      providers: [
        AddToCartNotificationEffects,
        provideMockStore(),
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AddToCartNotificationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('addToCart$', () => {

    let expected;
    const addToCartAction = new DaffAddToCart({productId: 'id', qty: 1});

    beforeEach(() => {
      const openAddToCartNotificationAction = new OpenAddToCartNotification();
      actions$ = hot('--a', { a: addToCartAction });
      expected = cold('--b', { b: openAddToCartNotificationAction });
    });

    it('should dispatch a OpenAddToCartNotification action', () => {
      expect(effects.addToCart$).toBeObservable(expected);
    });
  });
});
