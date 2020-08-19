import { User } from '../../shared/user.api';

export class LoadUsers {
  static readonly type = '[Users] Load ngxs-ngrx-users';
}

export class LoadUsersSuccess {
  static readonly type = '[Users] Load ngxs-ngrx-users success';
  constructor(public users: User[]) {}
}

export class LoadUsersFail {
  static readonly type = '[Users] Load ngxs-ngrx-users fail';
}

export class CreateUser {
  static readonly type = '[Users] Create user';
  constructor(public name: string) {}
}

export class CreateUserFail {
  static readonly type = '[Users] Create user fail';
}

export class CreateUserSuccess {
  static readonly type = '[Users] Create success';
  constructor(public user: User) {}
}

export class RemoveUser {
  static readonly type = '[Users] Remove user';
  constructor(public id: string) {}
}

export class RemoveUserfail {
  static readonly type = '[Users] Remove user fail';
}

export class RemoveUserSuccess {
  static readonly type = '[Users] Remove user success';
  constructor(public id: string) {}
}
