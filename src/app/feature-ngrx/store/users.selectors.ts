import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';
import { ngrxStoreKey } from './users.constants';

export const selectUsersStore = createFeatureSelector<UsersState>(ngrxStoreKey);

export const selectUsersCount = createSelector(
  [selectUsersStore],
  (users) => users.users.length
);
