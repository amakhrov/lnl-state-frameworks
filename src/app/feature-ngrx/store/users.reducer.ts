import { createReducer, on, Action } from '@ngrx/store';
import * as Actions from './users.actions';
import { User } from '../../shared/user.api';

export type UsersState = typeof initialUsersState;

export const initialUsersState = {
  loading: false,
  users: [] as User[],
};

const territoryPreferencesReducer = createReducer<UsersState>(
  initialUsersState,
  on(Actions.loadUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(Actions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    users,
  })),
  on(Actions.loadUsersFail, (state) => ({
    ...state,
    loading: false,
  })),
  on(Actions.createUser, (state) => ({
    ...state,
    loading: true,
  })),
  on(Actions.createUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    users: [...state.users, user],
  })),
  on(Actions.createUserFail, (state) => ({
    ...state,
    loading: false,
  })),
  on(Actions.removeUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== id),
  })),
  on(Actions.renameAll, (state) => ({
    ...state,
    users: state.users.map((user) => ({
      ...user,
      name: 'User ' + Math.round(Math.random() * 1000),
    })),
  }))
);

export function reducer(
  state: UsersState | undefined,
  action: Action
): UsersState {
  return territoryPreferencesReducer(state, action);
}
