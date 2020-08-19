import * as Actions from './users.actions';
import { User, UserApi } from '../../shared/user.api';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CreateUser, LoadUsers, RemoveUser } from './users.actions';
import { Observable } from 'rxjs';
import { append, patch, removeItem } from '@ngxs/store/operators';
import { tap } from 'rxjs/operators';

export type UsersStateShape = typeof initialUsersState;

export const initialUsersState = {
  loading: false,
  users: [] as User[],
};

@State({
  name: 'users',
  defaults: initialUsersState,
})
@Injectable()
export class UsersState {
  constructor(private userApi: UserApi) {}

  @Selector()
  static usersCount(state: UsersStateShape): number {
    return state.users.length;
  }

  @Action(LoadUsers)
  loadUsers(ctx: StateContext<UsersStateShape>): Observable<any> {
    ctx.setState(patch({ loading: true }));

    return this.userApi.list().pipe(
      tap({
        next: (users) => ctx.setState(patch({ users, loading: false })),
        error: (_) => ctx.setState(patch({ loading: false })),
      })
    );
  }

  @Action(CreateUser)
  createUser(
    ctx: StateContext<UsersStateShape>,
    action: CreateUser
  ): Observable<any> {
    ctx.setState(patch({ loading: true }));

    return this.userApi.create(action.name).pipe(
      tap({
        next: (user) =>
          ctx.setState(patch({ users: append([user]), loading: false })),
        error: (_) => ctx.setState(patch({ loading: false })),
      })
    );
  }

  @Action(RemoveUser)
  removeUser(
    ctx: StateContext<UsersStateShape>,
    action: RemoveUser
  ): Observable<any> {
    return this.userApi.remove(action.id).pipe(
      tap({
        next: () =>
          ctx.setState(
            patch({
              users: removeItem<User>((user) => user.id === action.id),
              loading: false,
            })
          ),
        error: (_) => ctx.setState(patch({ loading: false })),
      })
    );
  }
}
