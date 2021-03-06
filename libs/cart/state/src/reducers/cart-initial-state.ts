import { DaffLoadingState } from '@daffodil/core/state';

import { DaffCartReducerState } from './cart-state.interface';
import { DaffCartOperationType } from './cart-operation-type.enum';
import { DaffCartItemLoadingState } from './loading/cart-loading.type';
import { DaffCartResolveState } from './cart-resolve/cart-resolve-state.enum';

export const initialState: DaffCartReducerState<any> = Object.freeze({
  cart: {
    id: null,
    subtotal: null,
    grand_total: null,
    coupons: [],
    items: [],
    billing_address: null,
    shipping_address: null,
    payment: null,
    totals: [],
    shipping_information: null,
    available_shipping_methods: [],
    available_payment_methods: [],
  },
  loading: {
    [DaffCartOperationType.Cart]: DaffLoadingState.Complete,
    [DaffCartOperationType.Item]: DaffCartItemLoadingState.Complete,
    [DaffCartOperationType.ShippingAddress]: DaffLoadingState.Complete,
    [DaffCartOperationType.BillingAddress]: DaffLoadingState.Complete,
    [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Complete,
    [DaffCartOperationType.ShippingMethods]: DaffLoadingState.Complete,
    [DaffCartOperationType.Payment]: DaffLoadingState.Complete,
    [DaffCartOperationType.PaymentMethods]: DaffLoadingState.Complete,
    [DaffCartOperationType.Coupon]: DaffLoadingState.Complete,
  },
  errors: {
    [DaffCartOperationType.Cart]: [],
    [DaffCartOperationType.Item]: [],
    [DaffCartOperationType.ShippingAddress]: [],
    [DaffCartOperationType.BillingAddress]: [],
    [DaffCartOperationType.ShippingInformation]: [],
    [DaffCartOperationType.ShippingMethods]: [],
    [DaffCartOperationType.Payment]: [],
    [DaffCartOperationType.PaymentMethods]: [],
    [DaffCartOperationType.Coupon]: [],
  },
  resolved: DaffCartResolveState.Default
});
