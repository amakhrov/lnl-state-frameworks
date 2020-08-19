import { Injectable } from '@angular/core';
import { UserApi } from '../../shared/user.api';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from './users.actions';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  public loadConnection$ = createEffect(() =>
    this.action$.pipe(
      ofType(actions.loadUsers),
      exhaustMap(() =>
        this.userApi.list().pipe(
          map((users) => actions.loadUsersSuccess({ users })),
          catchError((error) => of(actions.loadUsersFail()))
        )
      )
    )
  );

  public createUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(actions.createUser),
      mergeMap(({ name }) =>
        this.userApi.create(name).pipe(
          map((user) => actions.createUserSuccess({ user })),
          catchError((error) => of(actions.createUserFail()))
        )
      )
    )
  );

  public removeUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(actions.removeUser),
      mergeMap(({ id }) =>
        this.userApi.remove(id).pipe(
          map(() => actions.removeUserSuccess({ id })),
          catchError((error) => of(actions.removeUserFail()))
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private userApi: UserApi,
    private store: Store<object>
  ) {}
}
