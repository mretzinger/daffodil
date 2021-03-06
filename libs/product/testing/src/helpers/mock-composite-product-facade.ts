import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { Injectable } from '@angular/core';

import {
	DaffCompositeProductFacadeInterface,
	DaffCompositeProductItemOption,
	DaffCompositeProduct,
	DaffCompositeProductItem,
	DaffPriceRange,
	DaffCompositeConfigurationItem
} from '@daffodil/product';

@Injectable({providedIn: 'root'})
export class MockDaffCompositeProductFacade implements DaffCompositeProductFacadeInterface {
	getRequiredItemPricesForConfiguration(id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffPriceRange> {
		return new BehaviorSubject(null);
	}
	getOptionalItemPricesForConfiguration(id: DaffCompositeProduct['id'], configuration?: Dictionary<DaffCompositeConfigurationItem>): BehaviorSubject<DaffPriceRange> {
		return new BehaviorSubject(null);
	}
	getPricesAsCurrentlyConfigured(id: DaffCompositeProduct['id']): BehaviorSubject<DaffPriceRange> {
		return new BehaviorSubject(null);
	}
	getAppliedOptions(id: DaffCompositeProduct['id']): BehaviorSubject<Dictionary<DaffCompositeProductItemOption>> {
		return new BehaviorSubject({});
	}
	isItemRequired(id: DaffCompositeProduct['id'], item_id: DaffCompositeProductItem['id']): BehaviorSubject<boolean> {
		return new BehaviorSubject(false);
	}
	dispatch(action) {};
	hasDiscount(priceRange: DaffPriceRange): boolean {
		return false;
	};
	hasPriceRange(priceRange: DaffPriceRange): boolean {
		return false;
	};
}
