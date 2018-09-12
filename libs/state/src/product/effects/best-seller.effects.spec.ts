import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { hot, cold } from 'jasmine-marbles';

import { Product } from '@daffodil/core';
import { ProductFactory } from '@daffodil/core/testing';

import { BestSellersLoad, BestSellersLoadSuccess, BestSellersLoadFailure } from '../actions/best-sellers.actions';
import { BestSellersEffects } from './best-seller.effects';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';
import { DaffDriverInterface, DaffDriver } from '@daffodil/driver';

describe('BestSellersEffects', () => {
  let actions$: Observable<any>;
  let effects: BestSellersEffects;
  let productFactory: ProductFactory;
  let mockBestSellers: Product[];
  let daffDriver: DaffDriverInterface;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        DaffDriverTestingModule
      ],
      providers: [
        BestSellersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(BestSellersEffects);
    daffDriver = TestBed.get(DaffDriver);
    productFactory = TestBed.get(ProductFactory);

    mockBestSellers = new Array(productFactory.create());
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when BestSellersLoadAction is triggered', () => {

    let expected;
    const bestSellersLoadAction = new BestSellersLoad();
    
    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(daffDriver.productService, 'getBestSellers').and.returnValue(of(mockBestSellers));
        const bestSellersLoadSuccessAction = new BestSellersLoadSuccess(mockBestSellers);
        actions$ = hot('--a', { a: bestSellersLoadAction });
        expected = cold('--b', { b: bestSellersLoadSuccessAction });
      });
      
      it('should dispatch a BestSellersLoadSuccess action', () => {
        expect(effects.loadBestSellers$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {
      
      beforeEach(() => {
        let error = 'Failed to load best selling products';
        let response = cold('#', {}, error);
        spyOn(daffDriver.productService, 'getBestSellers').and.returnValue(response);
        const bestSellersLoadFailureAction = new BestSellersLoadFailure(error);
        actions$ = hot('--a', { a: bestSellersLoadAction });
        expected = cold('--b', { b: bestSellersLoadFailureAction });
      });
      
      it('should dispatch a BestSellersLoadFailure action', () => {
        expect(effects.loadBestSellers$).toBeObservable(expected);
      });
    });
  });
});