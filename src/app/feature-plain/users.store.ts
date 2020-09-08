import { Injectable } from '@angular/core';
import { User, UserApi } from '../shared/user.api';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersStore {
  users: User[] = [];
  loading = false;

  get usersCount(): number {
    return this.users.length;
  }

  constructor(private userApi: UserApi) {}

  loadUsers(): Observable<any> {
    this.loading = true;
    return this.userApi.list().pipe(
      tap({
        next: (users: User[]) => {
          this.users = users;
          this.loading = false;
        },
        error: () => (this.loading = false),
      })
    );
  }

  createUser(name: string): Observable<any> {
    this.loading = true;
    return this.userApi.create(name).pipe(
      tap({
        next: (user) => this.userCreated(user),
        error: () => (this.loading = false),
      })
    );
  }

  private userCreated(user: User): void {
    this.users.push(user);
    this.loading = false;
  }

  removeUser(id: string): Observable<any> {
    return this.userApi.remove(id).pipe(
      tap({
        next: () => {
          this.users = this.users.filter((user) => user.id !== id);
        },
        error: () => {},
      })
    );
  }

  renameAll(): void {
    this.users.forEach((user) => {
      user.name = 'User ' + Math.round(Math.random() * 1000);
    });
  }
}
