import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { DaffGenericNavigationTree } from '@daffodil/navigation';
import { DaffNavigationDriver, DaffNavigationServiceInterface } from '@daffodil/navigation/driver';

import {
  DaffNavigationActionTypes,
  DaffNavigationLoad,
  DaffNavigationLoadSuccess,
  DaffNavigationLoadFailure
} from '../actions/navigation.actions';

@Injectable()
export class DaffNavigationEffects<T extends DaffGenericNavigationTree<T>> {

  constructor(
    private actions$: Actions,
    @Inject(DaffNavigationDriver) private driver: DaffNavigationServiceInterface<T>){}

  @Effect()
  loadNavigation$ : Observable<any> = this.actions$.pipe(
    ofType(DaffNavigationActionTypes.NavigationLoadAction),
    switchMap((action: DaffNavigationLoad) =>
      this.driver.get(action.payload)
        .pipe(
          map((resp) => {
            return new DaffNavigationLoadSuccess(resp);
          }),
          catchError(error => {
            return of(new DaffNavigationLoadFailure('Failed to load the navigation tree'));
          })
        )
    )
  )
}
