import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/user.api';

export const loadUsers = createAction('[Users] Load ngxs-ngrx-users');
export const loadUsersSuccess = createAction(
  '[Users] Load ngxs-ngrx-users success',
  props<{ users: User[] }>()
);
export const loadUsersFail = createAction('[Users] Load ngxs-ngrx-users fail');

export const createUser = createAction(
  '[Users] Create user',
  props<{ name: string }>()
);
export const createUserFail = createAction('[Users] Create user fail');
export const createUserSuccess = createAction(
  '[Users] Create user success',
  props<{ user: User }>()
);

export const removeUser = createAction(
  '[Users] Remove user',
  props<{ id: string }>()
);
export const removeUserFail = createAction('[Users] Remove user fail');
export const removeUserSuccess = createAction(
  '[Users] Remove user success',
  props<{ id: string }>()
);
