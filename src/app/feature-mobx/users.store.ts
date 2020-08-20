import { Injectable } from '@angular/core';
import { User, UserApi } from '../shared/user.api';
import { action, computed, observable } from 'mobx';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersStore {
  @observable users: User[] = [];
  @observable loading = false;

  @computed get usersCount(): number {
    return this.users.length;
  }

  constructor(private userApi: UserApi) {}

  @action loadUsers(): Observable<any> {
    this.loading = true;
    return this.userApi.list().pipe(
      tap({
        next: action('users loaded', (users) => {
          this.users = users;
          this.loading = false;
        }),
        error: action((_) => (this.loading = false)),
      })
    );
  }

  @action createUser(name: string): Observable<any> {
    this.loading = true;
    return this.userApi.create(name).pipe(
      tap({
        next: action((user) => {
          this.users.push(user);
          this.loading = false;
        }),
        error: action((_) => (this.loading = false)),
      })
    );
  }

  @action removeUser(id: string): Observable<any> {
    return this.userApi.remove(id).pipe(
      tap({
        next: action(() => {
          this.users = this.users.filter((user) => user.id === id);
        }),
        error: (_) => {},
      })
    );
  }
}
